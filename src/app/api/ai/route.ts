import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// System prompts for each tool
const TOOL_PROMPTS: Record<string, string> = {
    explain: `You are an expert code educator. Explain the provided code in a clear, educational way.

Format your response as:
## 🔍 Code Explanation

### What This Code Does
[High-level summary]

### How It Works
[Step-by-step breakdown]

### Key Concepts
[Important programming concepts used]

### Example Use Case
[When you would use this code]

Use markdown formatting with code blocks where appropriate.`,

    debug: `You are an expert debugger. Analyze the provided code for bugs, issues, and potential problems.

Format your response as:
## 🐛 Debug Analysis

### ❌ Issues Found
[List each issue with line numbers if possible]

### ✅ Fixed Code
\`\`\`[language]
[The corrected code]
\`\`\`

### 📋 What Was Fixed
| Issue | Fix Applied |
|-------|-------------|
[Table of fixes]

### 💡 Prevention Tips
[How to avoid these issues in the future]`,

    refactor: `You are an expert code refactorer. Improve the provided code for better readability, performance, and maintainability.

Format your response as:
## ✨ Refactored Code

### Improvements Made
[List of improvements]

### Refactored Code
\`\`\`[language]
[The improved code]
\`\`\`

### Why These Changes
[Explanation of each improvement]

### Performance Impact
[Any performance benefits]`,

    document: `You are an expert technical writer. Generate comprehensive documentation for the provided code.

Format your response as:
## 📚 Documentation

### Overview
[Brief description]

### Function/Class Reference
[Document each function/class with parameters, return values, and descriptions]

### Usage Examples
\`\`\`[language]
[Example usage code]
\`\`\`

### Notes
[Any important notes or warnings]`,

    readme: `You are an expert at writing README files. Generate a professional README.md for a project containing this code.

Format your response as a complete README with:
- Project title and badges
- Description
- Installation instructions
- Usage examples with code blocks
- API reference (if applicable)
- Contributing guidelines
- License section

Use proper markdown formatting.`,

    translate: `You are an expert polyglot programmer. Translate the provided code to the target language specified.

Format your response as:
## 🔄 Translated Code

### [Target Language] Version
\`\`\`[language]
[Translated code]
\`\`\`

### Key Differences
[Important differences between the source and target language implementations]

### Notes
[Any language-specific considerations]`,

    security: `You are a cybersecurity expert specializing in code security analysis.

Format your response as:
## 🛡️ Security Analysis

### ⚠️ Vulnerabilities Found
[List each vulnerability with severity: Critical/High/Medium/Low]

### Risk Assessment
| Issue | Severity | Impact |
|-------|----------|--------|
[Table of issues]

### ✅ Secure Code
\`\`\`[language]
[Code with security fixes applied]
\`\`\`

### Recommendations
[Best practices to follow]`,

    performance: `You are a performance optimization expert.

Format your response as:
## ⚡ Performance Analysis

### 📊 Current Metrics
- Time Complexity: [Big O]
- Space Complexity: [Big O]
- Potential Bottlenecks: [List]

### 🔍 Issues Identified
[List performance issues]

### ✅ Optimized Code
\`\`\`[language]
[Optimized version]
\`\`\`

### 📈 Improvement Summary
| Metric | Before | After |
|--------|--------|-------|
[Comparison table]

### 💡 Additional Recommendations
[Other optimization suggestions]`,
};

export async function POST(req: NextRequest) {
    try {
        // Check if API key is configured
        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json(
                { error: "OpenAI API key not configured" },
                { status: 500 }
            );
        }

        const body = await req.json();
        const { code, tool, language } = body;

        if (!code || !tool) {
            return NextResponse.json(
                { error: "Code and tool are required" },
                { status: 400 }
            );
        }

        // Get the system prompt for this tool
        let systemPrompt = TOOL_PROMPTS[tool] || TOOL_PROMPTS.explain;

        // For translation, add target language to prompt
        let userMessage = `Here is the code to analyze:\n\n\`\`\`\n${code}\n\`\`\``;

        if (tool === "translate" && language) {
            userMessage = `Translate this code to ${language}:\n\n\`\`\`\n${code}\n\`\`\``;
        }

        // Call OpenAI API
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini", // Fast and cheap, good for code
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userMessage },
            ],
            temperature: 0.3, // Lower temperature for more consistent code output
            max_tokens: 2000,
        });

        const result = completion.choices[0]?.message?.content || "No response generated";

        return NextResponse.json({ result });
    } catch (error: any) {
        console.error("AI API error:", error);

        // Handle rate limiting
        if (error.status === 429) {
            return NextResponse.json(
                { error: "Rate limit exceeded. Please try again in a moment." },
                { status: 429 }
            );
        }

        return NextResponse.json(
            { error: error.message || "Failed to generate response" },
            { status: 500 }
        );
    }
}

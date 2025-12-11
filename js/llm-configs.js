// Shared LLM Configuration for AI Insights
// This file can be imported by any submodule that needs LLM capabilities

const LLM_CONFIGS = [
    {
        id: 'claude',
        name: 'Claude',
        cacheKey: 'claudeInsightsCache',
        // Custom settings for Claude
        usesCliInstead: true, // Uses Claude Code CLI instead of API
        defaultModel: 'claude-sonnet-4-5'
    },
    {
        id: 'gemini',
        name: 'Gemini',
        cacheKey: 'geminiInsightsCache',
        // Custom settings for Gemini
        defaultModel: 'gemini-pro',
        requiresApiKey: 'GEMINI_API_KEY'
    },
    {
        id: 'openai',
        name: 'OpenAI',
        cacheKey: 'openaiInsightsCache',
        // Custom settings for OpenAI
        defaultModel: 'gpt-4-turbo-preview',
        requiresApiKey: 'OPENAI_API_KEY'
    }
];

// Generic API endpoint (single endpoint for all LLMs)
const LLM_API_ENDPOINT = '/api/insights/analyze';

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LLM_CONFIGS, LLM_API_ENDPOINT };
}

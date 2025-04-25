import fetch from 'node-fetch';

export const processChat = async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ 
        success: false,
        message: 'Message is required' 
      });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are a medical AI assistant. Please provide a helpful response to this medical query: ${message}`
            }]
          }]
        })
      }
    );

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to get AI response');
    }

    const aiResponse = data.candidates[0].content.parts[0].text;

    res.json({ 
      success: true,
      response: aiResponse 
    });
  } catch (error) {
    console.error('Chat processing error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to process chat message',
      error: error.message 
    });
  }
};


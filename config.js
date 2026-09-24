/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['9135175755'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: ',',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU247iOBD9F7+ChlzIBaSWlgQa0hDudBJW++AkjjG5205CesS/r0JPT8/D7mzvm12WT52qc6q+gywnDC1RC8bfQUFJDTnqjrwtEBgDo4oiREEfhJBDMAaNNRyyuSdNz2R2UNWzc2EXe1/nr3vPHl6VlNk1m2t5Ijj2E7j3QVH5CQl+AxiHNbtuDDiP5q2enV7UcLhvY7+apmVsi026Oz2vhYGzGhzjJ3DvECGhJMOz4oJSRGGyRO0WEvo1+tY8PDowNGaeYm3sZ+HgH90Xe3LCbnV7CUTBYlWD8bpCJ+9r9JEr7a7cC9562VFkTHanx9YU8UXVMHrzFpvDc5JsblvvdtLf6TOCMxRaIco44e2X+66vSvf0djNeDRLciOBar35dtOcijLJKmm0PwkZcU1naXwT8NeIeu1xRzujR1R05XiyHI+XUVGmB1rKyGWjaauGRZ7v0YsH+lfiWfngl/j9991b++oqRvzloVr1b+Edm8zm2RvM5dsKaLI01quPyXEzT5mv0rd5U2rc7YXIZTAsr0qz6rDvwpgv6SRY05/mwmi3KdiaRRvikD3lFf8cymY6gMYAvAw9uZYPMZ6RYtdKMqfPbxkV5mvgc70+D4q1s9lOdxVHEoe00/Gbpulvs7BWfkldntK9wvdcrl4l4G153T4+KYtRaIRiL9z6gCBPGKeQkzx4xTesDGNYHFFDEH+0FucNoPePBYhuU7puiHnfSDK83qotHxiFN0CAOCzs9+k1jPYE+KGgeIMZQuCCM57S1EWMQIwbGf/7VBxm68XfhunSy2AcRoYyfsqpIchh+qPrxCIMgrzJ+aLPA7A6IgrHwGUackwyzro9VBmlwITUyL5AzMI5gwtDPChFFIRhzWqGfU2vmYdf4qanulLW5BH2QPgQhIRgDSR6ORFkRNUVTlLH8B/vWdLCwKL5liIM+yGD6kA0lCQR9kLz/0iR1JA0VVRE1Ve7+dfH7T74dfIg4JAkDY2BaKZMtPJu90EQYnebziY0nJp6Az/o+jPIuhB85+TQyK64PHTVfWttoDtkgHo5GQwlqhnVcXoyWTurkunv6BxAwBkthWSQkp6VBrasTrnHAWZw+p7utWuQVcpe3Q+/cW/WyoeiaS/fVc81B/eaXJzRZO6cgprpRN1PPM02TStXheghv5QQ/ddlCVJMA/Zpsm/t7P0X7Al/3S+1s21lpbUhQ9nahnb/Ea3ExJWQg3YJhJCzz1CBJ76bkB2+yFrb6oDZUY9EMLnHh56VJvEomr9fmit8t/Bih5MfqIg9zdcp114igxyb4odB/KvlOvDOccO//gvFjt/zLfBqOLJYTuaE02jxXpUmm8i2lW2WzjdA6rZrDrM13QdmsFE8A9/tffVAkkEc5TcEYsNTvTEPzqrOvlUX5bzKZE2zNMF53ZSeQ8cnnSBxJihiHadEN7kiQhvJQ1+9/A/pAbmBIBwAA',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot',
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      antibotAction: 'warn', // 'warn' | 'kick'
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      antigroupstatus: false, // Block group status posts
      antigroupstatusAction: 'delete', // 'delete', 'kick'
      antisticker: false, // Stickers not allowed in group
      antistickerAction: 'delete', // 'delete', 'kick'
      antibadword: false, // Block bad words in group
      antibadwordAction: 'delete', // 'delete', 'kick', 'warn'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  

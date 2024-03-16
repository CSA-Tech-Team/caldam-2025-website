"use client"
export const speakText = () => {
    // text to speech isn't possible in server side
    const text = "CALDAM";
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
};

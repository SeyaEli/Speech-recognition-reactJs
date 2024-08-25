import React, {useState} from "react";

const SpeechRecognitionCompo = () => {
    const [recognition, setRecognition] = useState(null);
    const [transcript, setTranscript] = useState("");

    const startrecog = () => {
        const speechRecog = window.SpeechRecognition || window.webkitSpeechRecognition;
        const newRecognition = new speechRecog();
        newRecognition.lang = "en";
        newRecognition.continuous = true;

        newRecognition.onresult = (event) => {
            let finalTranscript = "";
            for (const result of event.results) {
                finalTranscript += result[0].transcript + " ";
            }
            setTranscript(finalTranscript.trim());
        };
            setRecognition(newRecognition);
    };

    const startRecognition = () => {
        if (!recognition) {
            startrecog();
        }
        recognition.start();
    };

    const stopRecognition = () => {
        if(recognition) {
            recognition.stop();
        }
    };

    const clearTranscript = () => {
        setTranscript("");
    }
    return(
        <div className="sp-1">
        <button onClick={startRecognition}>Start Speech Recognition</button>
        <button onClick={stopRecognition}>Stop Speech Recognition</button>
        <button onClick={clearTranscript}>Clear Text</button>
        <div id="text">{transcript}</div>
    </div>
    );
};
export default SpeechRecognitionCompo;

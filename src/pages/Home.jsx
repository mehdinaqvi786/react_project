import React, { useState, useEffect, useRef } from 'react';

const Home = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const avatarRef = useRef(null);

  useEffect(() => {
    if (showChatbot && messages.length === 0) {
      const welcomeMessages = [
        { sender: 'bot', text: "🤖 I'm your AI Gym Trainer, how can I help you today?" },
        { sender: 'bot', text: "Try: 💪 'Biceps workout', 🍽️ 'Diet for weight gain', 🔥 'Fat loss tips'" }
      ];
      setMessages(welcomeMessages);
      welcomeMessages.forEach(msg => speak(msg.text));
    }
  }, [showChatbot]);

  const speak = (text) => {
    if (!window.speechSynthesis) return;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'en-US';
    utter.rate = 1;
    utter.onstart = () => avatarRef.current.classList.add('talk');
    utter.onend = () => avatarRef.current.classList.remove('talk');
    speechSynthesis.speak(utter);
  };

  const handleUserSend = () => {
    if (!userInput.trim()) return;

    const userMsg = { sender: 'user', text: `🧑‍💪 ${userInput}` };
    setMessages(prev => [...prev, userMsg]);
    setUserInput('');
    setIsTyping(true);

    const input = userInput.toLowerCase();
    let response = "🤖 I'm here to help! Ask about any muscle group or fitness goal.";

    if (input.includes('bicep')) {
      response = "💪 Biceps Workout:\n• Barbell Curl\n• Hammer Curl\n• Concentration Curl\n👉 3 sets of 10–12 reps each";
    } else if (input.includes('tricep')) {
      response = "💪 Triceps Workout:\n• Skull Crushers\n• Tricep Dips\n• Cable Pushdowns\n👉 3 sets of 12 reps";
    } else if (input.includes('shoulder')) {
      response = "💪 Shoulder Workout:\n• Overhead Press\n• Lateral Raise\n• Front Raise\n👉 3×10-12 reps";
    } else if (input.includes('back')) {
      response = "💪 Back Workout:\n• Pull-Ups\n• Deadlifts\n• Bent-over Rows\n👉 3×8-10 reps";
    } else if (input.includes('legs')) {
      response = "🦵 Leg Workout:\n• Squats\n• Lunges\n• Leg Press\n• Calf Raises\n👉 4×10 reps";
    } else if (input.includes('abs')) {
      response = "🧍 Abs Workout:\n• Plank (60 sec)\n• Bicycle Crunches\n• Hanging Leg Raises\n• Russian Twists\n👉 3 sets each";
    } else if (input.includes('chest')) {
      response = "🏋️ Chest Workout:\n• Bench Press\n• Incline Dumbbell Press\n• Chest Fly\n👉 3×10 reps";
    } else if (input.includes('weight gain')) {
      response = "🍽️ Weight Gain Diet:\n• Eat 300–500 calories surplus\n• High protein: eggs, chicken, paneer\n• Add oats, milk, bananas, nuts\n• Whey protein after workout";
    } else if (input.includes('weight loss') || input.includes('fat loss')) {
      response = "🔥 Fat Loss Tips:\n• Calorie deficit 400–500\n• Cardio 4x/week\n• Eat lean protein + veggies\n• Try intermittent fasting";
    } else if (input.includes('muscle loss')) {
      response = "⚠️ Prevent Muscle Loss:\n• Eat 1.5g protein/kg\n• Avoid crash diets\n• Continue resistance training";
    }

    setTimeout(() => {
      const botMsg = { sender: 'bot', text: response };
      setMessages(prev => [...prev, botMsg]);
      speak(response);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Teko:wght@500;600;700&display=swap');

        .hero-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 4rem 2rem;
          text-align: center;
          background-size: cover;
          background-position: center;
          animation: backgroundSlide 14s infinite alternate;
          color: #fff;
          font-family: 'Teko', sans-serif;
          position: relative;
        }

        @keyframes backgroundSlide {
          0% { background-image: url('https://gymjunkies.com/wp-content/uploads/2015/11/shutterstock_268426613.jpg'); }
          50% { background-image: url('https://wallpapercave.com/wp/wp2483079.jpg'); }
          100% { background-image: url('https://gymjunkies.com/wp-content/uploads/2015/11/shutterstock_268426613.jpg'); }
        }

        .hero-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: -1;
        }

        .hero-title {
          font-size: 4rem;
          text-transform: uppercase;
          animation: fadeInUp 1s ease forwards;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          font-family: 'Roboto', sans-serif;
          animation: fadeInUp 1.5s ease forwards;
          max-width: 700px;
          margin-bottom: 2rem;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          animation: fadeInUp 2s ease forwards;
        }

        .btn-dark, .btn-primary {
          padding: 0.8rem 2rem;
          border-radius: 30px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          font-size: 1rem;
          transition: 0.3s;
        }

        .btn-dark { background-color: rgba(255,255,255,0.1); color: #fff; }
        .btn-primary { background: linear-gradient(to right, #0052A5, #003974); color: #fff; }
        .btn-dark:hover, .btn-primary:hover { transform: scale(1.05); }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .chatbot-box {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 380px;
          background: #0f1b3d;
          border-radius: 12px;
          box-shadow: 0 0 30px #00f0ff44;
          display: flex;
          flex-direction: column;
          font-family: 'Roboto', sans-serif;
          z-index: 999;
        }

        .chat-header {
          padding: 1rem;
          background: #001a33;
          color: #0ff;
          font-weight: bold;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .chat-messages {
          flex: 1;
          padding: 1rem;
          overflow-y: auto;
          background: #0f1b3d;
          display: flex;
          flex-direction: column;
        }

        .message {
          margin-bottom: 10px;
          padding: 10px;
          border-radius: 10px;
          max-width: 80%;
          white-space: pre-wrap;
        }

        .message.bot {
          background: #003974;
          color: white;
          align-self: flex-start;
        }

        .message.user {
          background: #00c6ff;
          color: #000;
          align-self: flex-end;
        }

        .typing {
          font-size: 0.85rem;
          color: #0ff;
          font-style: italic;
          margin: 5px;
        }

        .chat-input {
          display: flex;
          border-top: 1px solid #00c6ff33;
        }

        .chat-input input {
          flex: 1;
          padding: 10px;
          border: none;
          background: #0f1b3d;
          color: white;
        }

        .chat-input button {
          padding: 10px 15px;
          background: #0052A5;
          color: white;
          border: none;
          cursor: pointer;
        }

        .avatar-container {
          position: relative;
          width: 100px;
          height: 100px;
          margin-right: 16px;
          flex-shrink: 0;
        }

        .avatar {
          width: 100%;
          height: 100%;
          background: url('https://tse2.mm.bing.net/th/id/OIP.8rFT_h6GkOPfMGzTFuQBFgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3') center/contain no-repeat;
          border-radius: 12px;
          border: 2px solid #00f0ff;
          box-shadow: 0 0 12px #00f0ff66;
        }

        .avatar.talk::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 15px;
          width: 30px;
          height: 8px;
          background: #ff6666;
          border-radius: 4px;
          animation: lip-sync 0.2s infinite alternate;
        }

        @keyframes lip-sync {
          from { transform: scaleX(1); }
          to { transform: scaleX(0.6); }
        }
      `}</style>

      <section className="hero-section">
        <h1 className="hero-title">Welcome to Modern Gym</h1>
        <p className="hero-subtitle">
          Push your limits and reach new heights. Whether lifting, boxing or cardio — we've got the perfect plan.
        </p>
        <div className="hero-buttons">
          <button className="btn-dark" onClick={() => setShowVideo(true)}>▶️ Watch Video</button>
          <button className="btn-primary" onClick={() => setShowChatbot(!showChatbot)}>🤖 AI Trainer</button>
        </div>
      </section>

      {showVideo && (
        <div className="video-modal" onClick={() => setShowVideo(false)} style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)',
          display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999
        }}>
          <iframe
            width="80%" height="80%"
            src="https://www.youtube.com/embed/Sou12pLJFCc?autoplay=1"
            title="Gym Intro"
            allow="autoplay; encrypted-media"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      )}

      {showChatbot && (
        <div className="chatbot-box">
          <div className="chat-header">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div ref={avatarRef} className="avatar-container">
                <div className="avatar" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 'bold', color: '#0ff', fontSize: '1.1rem' }}>AI Gym Trainer</span>
                <span style={{ fontSize: '0.85rem', color: '#ccc' }}>Your Virtual Coach</span>
              </div>
            </div>
            <span style={{ cursor: 'pointer' }} onClick={() => setShowChatbot(false)}>✖</span>
          </div>
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {isTyping && <div className="typing">🤖 Typing...</div>}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Ask something like: Chest workout"
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleUserSend()}
            />
            <button onClick={handleUserSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;

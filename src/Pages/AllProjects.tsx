import { FaLongArrowAltLeft } from "react-icons/fa";
import { AllProCard } from "../components/AllProCard"
import { useNavigate } from "react-router-dom";

export const AllProjects = () => {
    const navigate = useNavigate();

    return (
    <div className="bg-[#000000] p-8">
      <div className="mb-6">
        <div 
          className="text-[#16F096] hover:text-[#16f095a6] mb-2 inline-block"
          onClick={()=>{
            navigate("../");
          }}
        >
          <FaLongArrowAltLeft/>
        </div>
        <h1 className="text-4xl font-custom font-color">All Projects</h1>
      </div>
      
      <div className="grid grid-cols-12 gap-2 border-[#16f095a6] font-custom font-color">
        <div className="col-span-3">Photo</div>
        <div className="col-span-2">Project</div>
        <div className="col-span-4">Description</div>
        <div className="col-span-3">Skills</div>
      </div>
      
      <AllProCard
        projectTitle="Nixarcade"
        description={[
          "• Founded and actively developing Nixarcade, a Solana-powered multiplayer gaming platform.",
          "• Architected Nixarcade using Solana libraries, enabling decentralized transactions for gaming dApp.",
          "• Secured funding from Solana Foundation & CoinDCX, for development of the platform."
        ]}
        link="https://nixarcade.fun/"
        projPhoto="projects/nixarcade.png"
        skills={[
          "Solana-web3.js",
          "TypeScript",
          "React",
          "Web-Socket",
          "Express"
        ]}
      />
      <AllProCard
        projectTitle="Stratus"
        description={[
          "• Developed Stratus, a monitoring tool in Golang to track Website Performance and Security Issues.",
          "• Implemented as a command-line tool that accepts configuration files for setup.",
          "• Integrated with automated email notifications to alert users of website issues."
        ]}
        link="https://stratus.nixblack.site/"
        projPhoto="projects/stratus.png"
        skills={[
          "Golang",
          "Mux"
        ]}
      />
      <AllProCard
        projectTitle="Chain Poll"
        description={[
          "• Developed a decentralized polling application powered by Rust smart contracts on the Solana blockchain.",
          "• Enabled secure and tamper-proof polls, leveraging blockchain decentralization.",
          "• Designed a seamless sharing feature, allowing polls to be shared via simple links for user convenience."
        ]}
        link="https://polls.nixblack.site/"
        projPhoto="projects/polls.png"
        skills={[
          "Rust",
          "Tailwind",
          "TypeScript",
          "Solana"
        ]}
      />
      <AllProCard
        projectTitle="JobLinker"
        description={[
          "• Developed a job search tool to provide relevant jobs according to the user resume and preferences.",
          "• Integrated Gemini for resume parsing and Google Search API for fetching job listings.",
          "• Complemented with a frontend that displays job headings, links, descriptions, and images."
        ]}
        link="https://jobs.nixblack.site"
        projPhoto="projects/joblinker.png"
        skills={[
          "Golang",
          "React",
          "TypeScript",
          "Gemini"
        ]}
      />
      <AllProCard
        projectTitle="Nix-Faucet"
        description={[
          "• Built a simple faucet to transfer solana on the devnet to a users account.",
          "• Mostly focused on the UI giving the website a mono-chorome theme."
        ]}
        link="https://faucet.nixblack.site"
        projPhoto="projects/faucet.png"
        skills={[
          "Solana-web3.js",
          "TypeScript",
          "React",
          "Tailwind"
        ]}
      />
      <AllProCard
        projectTitle="Ludo Game"
        description={[
          "• Developed a multiplayer Ludo game with real-time actions using WebSockets.",
          "• Structured the project with Turborepo for efficient Monorepo management.",
          "• Implemented Recoil for Efficient Global State Management, Enhancing Program Clarity."
        ]}
        link="https://ludofam.nixarcade.fun/"
        projPhoto="projects/ludo.png"
        skills={[
          "React",
          "Tailwind",
          "TypeScript",
          "WebSocket"
        ]}
      />
      <AllProCard
        projectTitle="Go Link Tree"
        description={[
          "• Personalized Linktree for storing social media links for fast access.",
          "• Developed with Golang, featuring JWT for Secure Login, and Optimized for Speed.",
          "• Deployed using Vercel, complemented by Golang backend on Render."
        ]}
        link="https://link.nixblack.site/"
        projPhoto="projects/linktree.jpeg"
        skills={[
          "Golang",
          "React",
          "TypeScript",
          "AWS"
        ]}
      />
      <AllProCard
        projectTitle="Linux Container Developed Using Golang"
        description={[
          "• Developed a Linux container using Golang to enable isolated command execution.",
          "• Utilized a root file directory to create an Ubuntu image for a containerized operating system."
        ]}
        link="https://github.com/NIXBLACK11/DockerWithGo"
        projPhoto="projects/cont.png"
        skills={[
          "Golang",
          "Bash"
        ]}
      />

      <AllProCard
        projectTitle="Telegram Chat Bot for Bank Users"
        description={[
          "• Multi-language chatbot, with text encodings built using LASER.",
          "• Provides easy 24/7 access with human-like support to users leveraging the Telegram API.",
          "• Enhanced security through Telegram IDs with seamless integration facilitated by Docker."
        ]}
        link="https://github.com/NIXBLACK11/telegramOrganizationChatBot"
        projPhoto="projects/chatbot.jpg"
        skills={[
          "Python",
          "Keras",
          "Docker",
          "LASER"
        ]}
      />
      <AllProCard
        projectTitle="The Feedback Loop"
        description={[
          "• Video analysis tool for content creators, providing personalized video feedback.",
          "• Compare videos against creations from top 1% creators based on audio and visual elements.",
          "• Deployed on AWS using Docker for Queue-based Worker Selection, and the Service on Vercel."
        ]}
        link="https://github.com/NIXBLACK11/The-Feedback-Loop"
        projPhoto="projects/feedback.png"
        skills={[
          "React",
          "JavaScript",
          "Node",
          "Keras",
          "Flask",
          "Docker"
        ]}
      />
      <AllProCard
        projectTitle="MERN Stack-based Chat Application"
        description={[
          "• Chat application with personal and group chat.",
          "• Enabled with real-time communication using Websockets.",
          "• Implemented secure login standards in Node.js to ensure user security."
        ]}
        link="https://github.com/NIXBLACK11/chatApp"
        projPhoto="projects/codechat.png"
        skills={[
          "React",
          "JavaScript",
          "Node",
          "WebSocket",
          "AWS",
          "Vercel"
        ]}
      />
      <AllProCard
        projectTitle="NIMBLE Chat Application"
        description={[
          "• Developed a Python-based chatbot desktop application with face recognition capabilities.",
          "• Facial recognition helps identify users and provide personalized greetings and interactions.",
          "• Designed a secure task management system that associates tasks with individual user profiles."
        ]}
        link="https://github.com/NIXBLACK11/ChatBot-NIMBLE-"
        projPhoto="projects/nimble.png"
        skills={[
          "Python",
          "Keras",
          "TensorFlow"
        ]}
      />
      <AllProCard
        projectTitle="Research Paper on IOT malware detection"
        description={[
          "• Led IoT malware research using image models like VGG16, achieving 95.6% accuracy and 85% precision.",
          "• Im- plemented Keras pre-trained models for enhanced image classification. Proficient in IoT security, deep learning, Keras, and Python."
        ]}
        link="https://github.com/NIXBLACK11/Malware_analysis_using_image_recognition"
        projPhoto="projects/vgg16.png"
        skills={[
          "Python",
          "Keras",
          "TensorFlow"
        ]}
      />
      <AllProCard
        projectTitle="Sentiment Analysis using LASER"
        description={[
          "• Implemented a multilingual model that predicts sentiments.",
          "• Trained using twiiter sentiment data, uses LASER for multilingual training."
        ]}
        link="https://github.com/NIXBLACK11/Malware_analysis_using_image_recognition"
        projPhoto="projects/LASER.png"
        skills={[
          "Python",
          "Keras",
          "TensorFlow"
        ]}
      />
      <AllProCard
        projectTitle="Java based Student Management Desktop Application"
        description={[
          "• Developed a desktop application for educational institutions, serving as an information portal.",
          "• Implemented user management and access levels for enhanced data security.",
          "• Designed separate login systems for administrators and users to ensure privacy."
        ]}
        link="https://github.com/NIXBLACK11/DESKTOP_APP"
        projPhoto="projects/hiltron.jpg"
        skills={[
          "Java",
          "MySQL",
          "Java Swing"
        ]}
      />
      <AllProCard
        projectTitle="Portfolio V1"
        description={[
          "• This is the first personal portfolio I made"
        ]}
        link="https://siddharth-dev-portfolio.netlify.app/"
        projPhoto="projects/v1.jpg"
        skills={[
          "React",
          "javascript",
          "Bootstrap"
        ]}
      />
      <AllProCard
        projectTitle="Chrome Extension for Text Summarization using BERT"
        description={[
          "• Utilized Google BERT for real-time text summarization, enhancing user productivity.",
          "• Integrated as a Chrome extension for easy and accessible text summarization."
        ]}
        link="https://github.com/NIXBLACK11/summarizationExtension"
        projPhoto="projects/bert.jpg"
        skills={[
          "HTML/CSS",
          "Javascript",
          "Django",
          "BERT",
          "Python"
        ]}
      />
      <AllProCard
      projectTitle="Instagram Hashtag Finder "
      description={[
        "Search Engine to find the hashtag related to topics in instagram."
      ]}
      link=""
      projPhoto="projects/hashtag.png"
      skills={[
        "React",
        "Javascript",
        "Bootstrap",
        "Facebook Graph Key"
      ]}
    />
    </div>
    )
  }
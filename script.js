/**
 * Petron AI Agency - Core Interface Engine
 * Year: 2026
 */

document.addEventListener("DOMContentLoaded", () => {
    // --- STATE MANAGEMENT ---
    const state = {
        currentIndustry: "realestate",
        currentLanguage: "en",
        selectedComponents: new Set(["Dialogue System", "Responsive Web UI"])
    };

    // --- DIALOGUE MATRIX DATA ---
    const chatData = {
        realestate: {
            botName: { en: "Petron Real Estate Bot", te: "పెట్రోన్ రియల్ ఎస్టేట్ బాట్", hi: "पेट्रोन रियल एस्टेट बॉट" },
            messages: {
                en: [
                    { sender: "bot", text: "Hello! Welcome to Petron Luxury Residencies. Looking for a premium 2 or 3 BHK apartment in Gachibowli?" },
                    { sender: "user", text: "Yes, send me the pricing plans and brochure." },
                    { sender: "bot", text: "Perfect! 📋 Sending the pricing layout and digital walk-through link to your registered contact instantly." }
                ],
                te: [
                    { sender: "bot", text: "నమస్కారం! పెట్రోన్ లగ్జరీ రెసిడెన్సీస్‌కు స్వాగతం. గచ్చిబౌలిలో 2 లేదా 3 BHK ప్రీమియం అపార్ట్‌మెంట్ల కోసం చూస్తున్నారా?" },
                    { sender: "user", text: "అవును, ధరల వివరాలు మరియు బ్రోచర్ పంపండి." },
                    { sender: "bot", text: "తప్పకుండా! 📋 ధరల పట్టిక మరియు డిజిటల్ వాక్-థ్రూ లింక్‌ను మీ నంబర్‌కు పంపుతున్నాము." }
                ],
                hi: [
                    { sender: "bot", text: "नमस्ते! पेट्रोन लग्जरी रेजिडेंसी में आपका स्वागत है। क्या आप गचीबोवली में प्रीमियम 2 या 3 BHK अपार्टमेंट की तलाश कर रहे हैं?" },
                    { sender: "user", text: "हाँ, मुझे मूल्य निर्धारण और ब्रोशर भेजें।" },
                    { sender: "bot", text: "बिल्कुल! 📋 प्राइसिंग लेआउट और डिजिटल वॉक-थ्रू लिंक आपके नंबर पर तुरंत भेजा जा रहा है।" }
                ]
            }
        },
        ecommerce: {
            botName: { en: "Petron Retail Concierge", te: "పెట్రోన్ రిటైల్ సాయం", hi: "पेट्रोन रिटेल कंसीयज" },
            messages: {
                en: [
                    { sender: "bot", text: "Hey there! Your cart containing the Premium Leather Boots is waiting. Use code OMNI10 for 10% off right now!" },
                    { sender: "user", text: "Is cash on delivery available for pincode 533001?" },
                    { sender: "bot", text: "Yes, COD is active for your area! 🚚 Reply with 'ORDER' to confirm placement right away." }
                ],
                te: [
                    { sender: "bot", text: "నమస్తే! మీ కార్ట్‌లో ఉన్న ప్రీమియం లెదర్ బూట్స్ మీ కోసం వేచి ఉన్నాయి. ఇప్పుడే 10% తగ్గింపు కోసం OMNI10 కోడ్ ఉపయోగించండి!" },
                    { sender: "user", text: "పిన్‌కోడ్ 533001 కి క్యాష్ ఆన్ డెలివరీ అందుబాటులో ఉందా?" },
                    { sender: "bot", text: "అవును, మీ ప్రాంతంలో COD అందుబాటులో ఉంది! 🚚 ఆర్డర్ ఖరారు చేయడానికి 'ORDER' అని రిప్లై ఇవ్వండి." }
                ],
                hi: [
                    { sender: "bot", text: "नमस्ते! आपकी कार्ट में प्रीमियम लेदर बूट्स आपका इंतजार कर रहे हैं। 10% छूट के लिए अभी OMNI10 कोड का उपयोग करें!" },
                    { sender: "user", text: "क्या पिनकोड 533001 के लिए कैश ऑन डिलीवरी उपलब्ध है?" },
                    { sender: "bot", text: "जी हाँ, आपके क्षेत्र में COD सक्रिय है! 🚚 ऑर्डर की पुष्टि करने के लिए तुरंत 'ORDER' लिखकर उत्तर दें।" }
                ]
            }
        },
        education: {
            botName: { en: "Petron EdTech Navigator", te: "పెట్రోన్ విద్యా సహాయకుడూ", hi: "पेट्रोन एडटेक नेविगेटर" },
            messages: {
                en: [
                    { sender: "bot", text: "Welcome to Edge Upskilling Academy. Ready to fast-track your technical career with our Full-Stack Architecture Track?" },
                    { sender: "user", text: "Does this program include live mentorship and placement support?" },
                    { sender: "bot", text: "Absolutely. 🚀 You get 1-on-1 weekly syncs and direct placement routes to tier-1 enterprise tech hubs." }
                ],
                te: [
                    { sender: "bot", text: "ఎడ్జ్ అప్‌స్కిల్లింగ్ అకాడమీకి స్వాగతం. మా ఫుల్-స్టాక్ ఆర్కిటెక్చర్ కోర్సుతో మీ టెక్నికల్ కెరీర్‌ను మార్చుకోవడానికి సిద్ధంగా ఉన్నారా?" },
                    { sender: "user", text: "ఈ ప్రోగ్రామ్‌లో లైవ్ మెంటర్‌షిప్ మరియు ప్లేస్‌మెంట్ సపోర్ట్ ఉంటుందా?" },
                    { sender: "bot", text: "ఖచ్చితంగా. 🚀 ప్రతి వారం వన్-ఆన్-వన్ గైడెన్స్ మరియు ప్రముఖ టెక్ కంపెనీలకు ప్లేస్‌మెంట్ రూట్స్ లభిస్తాయి." }
                ],
                hi: [
                    { sender: "bot", text: "एज अपस्किलिंग एकेडमी में आपका स्वागत है। क्या आप हमारे फुल-स्टैक आर्किटेक्चर ट्रैक के साथ अपने टेक्निकल करियर को आगे बढ़ाने के लिए तैयार हैं?" },
                    { sender: "user", text: "क्या इस कार्यक्रम में लाइव मेंटरशिप और प्लेसमेंट सहायता शामिल है?" },
                    { sender: "bot", text: "बिल्कुल। 🚀 आपको साप्ताहिक 1-on-1 गाइडेंस और प्रमुख टेक कंपनियों के लिए डायरेक्ट प्लेसमेंट रूट मिलते हैं।" }
                ]
            }
        }
    };

    // --- ELEMENT SELECTORS ---
    const introCurtain = document.getElementById("intro-curtain");
    const logTicker = document.getElementById("logTicker");
    const industrySelectors = document.getElementById("industrySelectors");
    const languageSelectors = document.getElementById("languageSelectors");
    const chatViewport = document.getElementById("chatViewport");
    const phoneBotName = document.getElementById("phoneBotName");
    const matrixItems = document.querySelectorAll(".matrix-item");
    const assetCounterDisplay = document.getElementById("assetCounterDisplay");
    const scoperForm = document.getElementById("scoperForm");
    const formContainerBlock = document.getElementById("formContainerBlock");
    const successCard = document.getElementById("successCard");
    const resetFormBtn = document.getElementById("resetFormBtn");

    // --- 1. INTRO TERMINAL LOADING SCREEN ---
    const runIntroSimulation = () => {
        const logs = [
            "Initializing Core Node...",
            "Mapping Dialect Pipelines [TE, HI, EN]...",
            "Securing API Endpoints...",
            "System Live. Launching Core UI..."
        ];
        let step = 0;

        const interval = setInterval(() => {
            if (step < logs.length) {
                logTicker.textContent = logs[step];
                step++;
            } else {
                clearInterval(interval);
                introCurtain.style.opacity = "0";
                setTimeout(() => {
                    introCurtain.style.display = "none";
                }, 600);
            }
        }, 600);
    };
    runIntroSimulation();

    // --- 2. SANDBOX CHAT ENGINE ---
    const updateChatSandbox = () => {
        const domainData = chatData[state.currentIndustry];
        if (!domainData) return;

        // Update Bot Identity Profile Header
        phoneBotName.textContent = domainData.botName[state.currentLanguage] || domainData.botName["en"];

        // Clear and Compile Dynamic Messages Tree
        chatViewport.innerHTML = "";
        const targetMessages = domainData.messages[state.currentLanguage] || domainData.messages["en"];

        targetMessages.forEach((msg, index) => {
            setTimeout(() => {
                const bubble = document.createElement("div");
                
                // Fixed naming alignment mapping to CSS (.msg.bot or .msg.user)
                bubble.className = `msg ${msg.sender === "bot" ? "bot" : "user"}`;
                bubble.innerHTML = `<p>${msg.text}</p>`;
                chatViewport.appendChild(bubble);
                
                // Instantiates structural entrance transform smoothly
                requestAnimationFrame(() => {
                    bubble.classList.add("visible");
                });
                
                // Auto Scroll Layout to Base
                chatViewport.scrollTop = chatViewport.scrollHeight;
            }, index * 800);
        });
    };

    // Initialize Viewport State
    updateChatSandbox();

    // Context Controls UI Event Listeners
    industrySelectors.addEventListener("click", (e) => {
        const targetBtn = e.target.closest(".selector-btn");
        if (!targetBtn) return;
        
        industrySelectors.querySelectorAll(".selector-btn").forEach(btn => btn.classList.remove("active"));
        targetBtn.classList.add("active");
        
        state.currentIndustry = targetBtn.dataset.industry;
        updateChatSandbox();
    });

    languageSelectors.addEventListener("click", (e) => {
        const targetBtn = e.target.closest(".selector-btn");
        if (!targetBtn) return;

        languageSelectors.querySelectorAll(".selector-btn").forEach(btn => btn.classList.remove("active"));
        targetBtn.classList.add("active");

        state.currentLanguage = targetBtn.dataset.lang;
        updateChatSandbox();
    });

    // --- 3. CONFIGURATION MATRIX (SYSTEM SCOPER) ---
    const updateScoperMetrics = () => {
        const count = state.selectedComponents.size;
        assetCounterDisplay.textContent = `${count} Infrastructure Track${count === 1 ? "" : "s"} Enabled`;
    };

    matrixItems.forEach(item => {
        item.addEventListener("click", () => {
            const componentName = item.dataset.component;

            if (state.selectedComponents.has(componentName)) {
                if (state.selectedComponents.size > 1) {
                    state.selectedComponents.delete(componentName);
                    item.classList.remove("selected");
                }
            } else {
                state.selectedComponents.add(componentName);
                item.classList.add("selected");
            }
            updateScoperMetrics();
        });
    });

    // --- 4. ASYNCHRONOUS WEB3FORMS CONTROLLER ---
    if (scoperForm) {
        scoperForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const submitButton = scoperForm.querySelector(".btn-submit");
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = "Compiling Parameters...";
            submitButton.disabled = true;

            const formData = new FormData(scoperForm);

            // Appends selected checkbox configurations dynamically into submission email payload
            const functionalScope = Array.from(state.selectedComponents).join(", ");
            formData.append("Selected_Infrastructure_Tracks", functionalScope);

            try {
                const response = await fetch("https://n8n.srv1704252.hstgr.cloud/webhook/1ef56f0a-d474-407c-9931-20e3dac0f57e",
                                             {
                    method: "POST",
                     headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
                });
if (response.ok) {
    formContainerBlock.style.display = "none";
    successCard.style.display = "flex";
    scoperForm.reset();
} else {
    alert("Submission failed.");
}
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                }
            } catch (error) {
                console.error("Network interface error status:", error);
                alert("Pipeline exception detected. Please check your network or reach out over WhatsApp.");
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            }
        });
    }

    // Form Scoper Reset Engine
    if (resetFormBtn) {
        resetFormBtn.addEventListener("click", () => {
            successCard.style.display = "none";
            formContainerBlock.style.display = "block";
            const submitButton = scoperForm.querySelector(".btn-submit");
            if (submitButton) {
                submitButton.textContent = "Request Architectural Proposal";
                submitButton.disabled = false;
            }
        });
    }
});

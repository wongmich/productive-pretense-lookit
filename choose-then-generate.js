function generateProtocol(child, pastSessions) {
    // ---- Helper Functions ----
    // returns random coin flip as true or false
    function randomBoolean() {
        return Boolean(Math.floor(Math.random() * 2));
    }
    function randomItem(items) {
        return items[Math.floor(Math.random() * items.length)];
    }

    // shuffles an array
    function shuffle(array) {
        var shuffled = Ember.$.extend(true, [], array); // deep copy array
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = shuffled[i];
            shuffled[i] = shuffled[j];
            shuffled[j] = temp;
        }
        return shuffled;
    }

    // ---- Define non-test trial frames

    var frames = {
        "welcome": {
            "kind": "exp-lookit-text",
            "blocks": [
                {
                    "emph": true,
                    "title": "Thank you for your interest in our study!",
                    "text": "Reminder: Your child does not need to be with you until the videos begin."
                },
                {
                    "text": "Here's a quick summary of what's about to happen:",
                    "listblocks": [
                        {
                            "text": "1. Webcam Setup and Video Consent. First, we'll be checking that your webcam is working. Then you and your child will give your consent to participate in this research."
                        },
                        {
                            "text": "2. Study Overview. Here, you will learn a little more about what your child will be doing in this study, along with some other important details about your role in the game."
                        },
                        { "text": "3. When you click the 'Start the game!' button on the Study Overview page, the study will begin! This study will take about 15 minutes in total." }
                    ]
                },
                { "text": "Thank you so much for helping us with our science! We hope you and your child have fun." }
            ],
            "showPreviousButton": false
        },
        "video-config": {
            "kind": "exp-video-config",
            "troubleshootingIntro": "If you're having any trouble or would like us to walk you through setup, please email michellewong@fas.harvard.edu"
        },
        "video-consent": {
            "kind": "exp-lookit-video-consent",
            "template": "consent_005",
            "PIName": "Michelle Wong",
            "institution": "Harvard University",
            "PIContact": "michellewong@fas.harvard.edu",
            "purpose": "We're interested in how children think about pretend play and what influences their pretend play preferences. Recent research has shown that children at play often invent novel goals, but we don't know how children actually decide which goals and which pretend scenarios to play with. In this study, we want to learn more about how children choose what to play, and how they creatively exercise their imagination.",
            "procedures": "Your child will see pictures of different places and objects to play pretend with. In part 1 of the study, we will ask your child to choose which object they would rather play with. In part 2 of the study, they will generate as many ideas as they can for what a given object could be in a pretend scenario.",
            "risk_statement": "There are no expected risks if you participate in the study.",
            "payment": "After you finish the study, we will email you a $5 Amazon gift card within approximately one week. To be eligible for the gift card, your child must meet all eligibility criteria (e.g., be in the age range for this study), you need to submit a valid consent statement, and we need to see that there is a child with you. Additionally, your child may only participate in this study once in order to be eligible for compensation. There may be multiple versions of this study posted over time, but only your first participation will count for compensation. However, even if you do not finish the whole study or we are not able to use your child's data, we will still send a gift card! There are no other direct benefits to you or your child from participating, but we hope you will enjoy the experience.",
            "datause": "We are primarily interested in the answers your child provides. A research assistant may also watch your videos to code any spontaneous speech your child generates during the task.",
            "include_databrary": true,
            "gdpr": false,
            "research_rights_statement": "You are not waiving any legal claims, rights or remedies because of your participation in this research study.  If you feel you have been treated unfairly, or you have questions regarding your rights as a research subject, you may contact Harvard's Committee on the Use of Human Subjects (cuhs@harvard.edu)."
        },
        "study-preview": {
            "kind": "exp-lookit-stimuli-preview",
            "doRecording": true,
            "requirePreview": false,
            "previewButtonText": "I'd like to preview the videos",
            "skipButtonText": "Skip preview",
            "blocks": [
                {
                    "emph": true,
                    "title": "Let's play pretend! Study overview"
                },
                {
                    "emph": true,
                    "text": "Reminder: Your child does not need to be with you until the videos begin. Now, let's go over what will happen in the study!"
                },
                {
                    "text": "There are two parts to this study:",
                    "listblocks": [
                        { "text": "1. Your child will first play a Choosing game. We will present 8 different pretend play scenarios. In each scene, your child will choose which object they would rather pretend with." },

                        {
                            "text": "2. Then, your child will play an Ideas game with the same images and objects. We'll ask your child to think out loud, and share as many ideas as they can for what they could pretend those objects to be."
                        }]
                },
                {
                    "text": "\nBefore we start, if you'd like, you can preview the sort of images that your child will see. Importantly, you should watch these example videos without your child."
                }
            ],
            "showPreviousButton": false,
            "baseDir": "https://raw.githubusercontent.com/wongmich/productive-pretense-lookit/choose-then-generate/",
            "videoTypes": ["webm", "mp4"],
            "stimuli": [
                {
                    "video": "PP Stimuli Preview Choose",
                    "caption": "In Part 1, your child will choose which object they would rather play pretend with. Here's an example of what the images and choices will look like:"
                },
                {
                    "video": "PP Stimuli Preview Generate",
                    "caption": "In Part 2, your child will generate as many ideas for what they could pretend an object to be. Here's an example of what the images and prompts will look like:"
                }
            ]
        },
        "study-instructions": {
            "kind": "exp-lookit-instructions",
            "blocks": [
                {
                    "title": "Parent's role",
                    "listblocks": [
                        {
                            "text": "Please allow your child to answer at their own pace. Don't give any hints or say whether you agree!"
                        },
                        {
                            "text": "In Part 1, your child just has to make a single choice. If your child can click on their own, let them click one of the answer choices, then click the Next button. If they can't click on their own, you can click for them."
                        },
                        {
                            "text": "You can always click 'Replay' to repeat the question for them."
                        },
                        {
                            "text": "In Part 2, your child will be asked to generate as many ideas as they can. If your child pauses for several seconds, please ask them: ''Is there anything else or are you all done?'' You can repeat this for every pause."
                        }
                    ]
                },
                {
                    "title": "Taking a break",
                    "listblocks": [
                        {
                            "text": "If your child gets fussy or distracted, or you need to attend to something for a moment, you can pause the study by pressing the space key on the keyboard."
                        },
                        {
                            "text": "If you need to end the study early, try closing the window and you should see an ‘exit' option pop up. You'll be prompted to note any technical problems you might be experiencing and to select a privacy level for your video."
                        }
                    ]
                },
                {
                    "title": "Test your audio",
                    "text": "Please turn the volume up so it's easy to hear but still comfortable.",
                    "mediaBlock": {
                        "text": "Make sure you and your child can hear the audio before you begin!",
                        "isVideo": false,
                        "sources": [
                            {
                                "src": "https://raw.githubusercontent.com/wongmich/productive-pretense-lookit/choose-then-generate/mp3/TestAudio.mp3",
                                "type": "audio/mp3"
                            }
                        ],
                        "mustPlay": true,
                        "warningText": "Please try playing the sample audio."
                    }
                }
            ],
            "showWebcam": false,
            "nextButtonText": "Next"
        },
        "webcam-config-quality": {
            "kind": "exp-video-config-quality",
            "title": "Webcam set up",
            "introText": "We'll be analyzing what your child chooses and what they say -- but only if we can hear them clearly! Please check each of the following to ensure we're able to use your video:",
            "requireItemConfirmation": true,
            "completedItemText": "Did it!",
            "instructionBlocks": [
                {
                    "text": "<strong>Make sure the webcam you're using is roughly centered</strong> relative to this monitor. This makes it much easier for us to tell what your child is looking at.",
                    "image": {
                        "src": "https://s3.amazonaws.com/lookitcontents/website/centering.png",
                        "alt": "Example images of using centered external webcam on monitor or built-in webcam on laptop."
                    }
                }],
            "requireTestVideo": true,
            "showRecordMenu": true,
            "recordingInstructionText": "You should be able to see your camera view above. You can create and view a short recording to see how your setup looks."
        },
        // CHOOSE INTRO FRAMES
        "choose-gameintro": {
            "kind": "exp-lookit-video",
            "video": {
                "loop": false,
                "position": "fill",
                "source": "choose-gameintro"
            },
            "backgroundColor": "white",
            "autoProceed": false,
            "showPreviousButton": false,
            "requireVideoCount": 1,
            "doRecording": false,
            "frameOffsetAfterPause": 0,
            "baseDir": "https://raw.githubusercontent.com/wongmich/productive-pretense-lookit/choose-then-generate/",
            "videoTypes": ["mp4"]
        },
        "choose-warmup-letspractice": {
            "kind": "exp-lookit-images-audio",
            "baseDir": "https://raw.githubusercontent.com/wongmich/productive-pretense-lookit/choose-then-generate/",
            "audio": "choose_warmup_letspractice",
            "images": [
                {
                    "id": "warmup",
                    "src": "introgame.png",
                    "position": "fill",
                    "nonChoiceOption": true
                }
            ],
            "backgroundColor": "white",
            "autoProceed": true,
            "doRecording": false,
        },
        "choose-warmup-whichwould": {
            "kind": "exp-lookit-images-audio",
            "baseDir": "https://raw.githubusercontent.com/wongmich/productive-pretense-lookit/choose-then-generate/",
            "audio": "choose_warmup_whichwould",
            "images": [
                {
                    "id": "choose-warmupgamebg",
                    "src": "introgame.png",
                    "position": "fill",
                    "nonChoiceOption": true
                },
                {
                    "id": "squirrel",
                    "src": "introsquirrel.png",
                    "top": "54",
                    "left": "76",
                    "width": "24.3",
                    "displayDelayMs": 7000,
                    "correct": true,
                    "feedbackAudio": "choose_warmup_greatSQUIRRELintro"
                },
                {
                    "id": "bird",
                    "src": "introbird.png",
                    "top": "55.5",
                    "left": "0.1",
                    "width": "24.3",
                    "displayDelayMs": 5000,
                    "correct": true,
                    "feedbackAudio": "choose_warmup_greatBIRDintro"
                }
            ],
            "highlights": [
                {
                    "range": [7, 7.5],
                    "imageId": "squirrel"
                },
                {
                    "range": [5, 6],
                    "imageId": "bird"
                }
            ],
            "parentTextBlock": {
                "css": {
                    "font-size": "13pt",
                    "padding": "0.5em"
                },
                "title": "For Parents",
                "text": "Please just say 'Okay!' when your child answers - don't give any hints or say whether you agree! You can always click 'Replay' to repeat the question. \nIf your child can click on their own, let them click one of the answer choices, then click the Next button. If they can't click on their own, you can click for them."
            },
            "correctChoiceRequired": true,
            "showPreviousButton": false,
            "backgroundColor": "white",
            "autoProceed": false,
            "nextButtonText": "Next",
            "choiceRequired": true,
            "doRecording": true
        },
        // GENERATE INTRO FRAMES
        "generate-gameintro": {
            "kind": "exp-lookit-video",
            "video": {
                "loop": false,
                "position": "fill",
                "source": "generate-gameintro"
            },
            "baseDir": "https://raw.githubusercontent.com/wongmich/productive-pretense-lookit/choose-then-generate/",
            "videoTypes": ["mp4"],
            "backgroundColor": "white",
            "autoProceed": false,
            "showPreviousButton": false,
            "requireVideoCount": 1,
            "doRecording": true,
            "frameOffsetAfterPause": 0,
        },
        "generate-warmup-letspractice": {
            "kind": "exp-lookit-images-audio",
            "baseDir": "https://raw.githubusercontent.com/wongmich/productive-pretense-lookit/choose-then-generate/",
            "audio": "generate_warmup_letspractice",
            "audioTypes": ["mp3"],
            "images": [
                {
                    "id": "generate-meadow",
                    "src": "introgame.png",
                    "position": "fill",
                    "nonChoiceOption": true
                }
            ],
            "backgroundColor": "white",
            "autoProceed": true,
            "doRecording": true,
        },
        "generate-warmup-feedback": {
            "kind": "exp-lookit-images-audio",
            "baseDir": "https://raw.githubusercontent.com/wongmich/productive-pretense-lookit/choose-then-generate/",
            "audio": "generate_warmup_great",
            "audioTypes": ["mp3"],
            "images": [
                {
                    "id": "meadowslidefeedback",
                    "src": "introgame.png",
                    "position": "fill"
                }
            ],
            "backgroundColor": "white",
            "autoProceed": false,
            "showPreviousButton": false,
            "doRecording": true,
        },
        // END OF STUDY
        "end-video": {
            "kind": "exp-lookit-video",
            "videoTypes": ["mp4"],
            "baseDir": "https://raw.githubusercontent.com/wongmich/productive-pretense-lookit/choose-then-generate/",
            "video": {
                "loop": false,
                "position": "fill",
                "source": "ending"
            },
            "backgroundColor": "white",
            "autoProceed": false,
            "requireVideoCount": 1,
            "doRecording": false,
            "frameOffsetAfterPause": 0,
        },
        "exit-survey": {
            "kind": "exp-lookit-exit-survey",
            "debriefing": {
                "title": "Thank you for participating!",
                "blocks": [
                    {
                        "title": "",
                        "text": "This research wouldn't be possible without awesome parents like you."
                    },
                    {
                        "title": "Some Background Information:",
                        "text": "Play, including pretend play, is a common part of early childhood. However, researchers are still studying how play behaviors develop, and how play affects children's learning and development. Because play is so variable across individual children, it can be tricky to carefully measure and study how children think and make decisions during play.\n\nIn this research, we look at which objects children choose to play pretend with. Do children prefer objects that offer more possibilities for imagining with? Or do they prefer objects that they can very quickly imagine as something else, even if they can only think of one idea?\n\nTo answer these questions, we ran two related tasks in this study. Part 1 measured which objects children prefer. Part 2 measured what ideas children come up with. By combining the data from both tasks, we can better understand how children think about pretend possibilities, and how children choose what to play with. We are also interested in how children's pretend play relates to other aspects of their development, such as language and age."
                    },
                    {
                        "title": "Additional Resources:",
                        "text": "<ul>Below we list a few resources to learn more about pretend play and its role in development: <li>A playlist of <a href='https://www.ted.com/playlists/383/the_importance_of_play' target='_blank' rel='noopener'>TED Talks on the benefits of play</a>, for children and adults </li><li>Project Zero at the Harvard School of Education has published several resources for teachers and families about play and learning, including a blog with <a href='https://www.popatplay.org/categories/home-learning' target='_blank' rel=noopener'>family-friendly activities for playful home learning</a> and a <a href='https://pz.harvard.edu/sites/default/files/PoP%20Book%203.27.23.pdf' target='_blank' rel=noopener'>guidebook on the Pedagogy of Play</a> for educators .</li><li><a href='https://files.eric.ed.gov/fulltext/EJ1016165.pdf' target='_blank' rel='noopener'>This article </a> from the American Journal of Play discusses how imaginative play may foster causal reasoning by thinking about alternatives.</li></ul>"
                    },
                    {
                        "title": "Compensation:",
                        "text": "To thank you for your participation, we'll be emailing you a $5 USD Amazon gift card - this should arrive in your inbox within the next week after we confirm your consent video and check that your child is in the age range for this study (If you don't hear from us by then, feel free to reach out!). If you participate again with another child in the age range, you'll receive one gift card per child."
                    },
                    {
                        "title": "Questions or Concerns:",
                        "text": "Please do not hesitate to contact Michelle Wong at michellewong@fas.harvard.edu"
                    }
                ]
            }
        },
        // MOTIVATION
        "lets-keep-going": {
            "kind": "exp-lookit-video",
            "baseDir": "https://raw.githubusercontent.com/wongmich/productive-pretense-lookit/choose-then-generate/",
            "videoTypes": ["mp4"],
            "video": {
                "loop": false,
                "position": "fill",
                "source": "letskeepgoing"
            },
            "backgroundColor": "white",
            "autoProceed": false,
            "showPreviousButton": false,
            "requireVideoCount": 1,
            "doRecording": false,
            "frameOffsetAfterPause": 0
        },
        "halfway-done": {
            "kind": "exp-lookit-video",
            "baseDir": "https://raw.githubusercontent.com/wongmich/productive-pretense-lookit/choose-then-generate/",
            "videoTypes": ["mp4"],
            "video": {
                "loop": false,
                "position": "fill",
                "source": "halfwaydone"
            },
            "backgroundColor": "white",
            "autoProceed": false,
            "showPreviousButton": false,
            "requireVideoCount": 1,
            "doRecording": false,
            "frameOffsetAfterPause": 0
        }
    }

    // Start off the frame sequence with config/consent/introduction frames
    // so far, we have 7 initial frames
    // TODO: WHILE TESTING, SKIP INITIAL FRAMES by using an empty list []
    //frame_sequence = []
    frame_sequence = ['welcome', 'video-config', 'video-consent', 'study-preview', 'study-instructions', 'choose-gameintro', 'choose-warmup-letspractice', 'choose-warmup-whichwould']

    // Now define parameters for test trials
    // each element is a size 7 list:
    // [ audio = choose-scene-objectL-objectR
    //   objectL_delay, objectR_delay
    //   objectL_hl1, objectR_hl1, objectL_hl2, objectR_hl2
    // ]
    // NOTE: audio should filenames in baseDir/mp3
    // NOTE: since audio filename includes all other object names, we can just use the audio filename to define the rest of the trial
    // to reduce chance of typos 
    var choose_pairings_a1 = [
        [
            "choose-campers-helmet-blanket",
            11000, 12000,
            [11, 12], [12, 13], [17, 18], [18, 19]
        ],
        [
            "choose-cooks-hairbrush-stringlights",
            11000, 12000,
            [11, 12], [12, 13], [17, 18], [18, 19]
        ],
        [
            "choose-doctors-socks-broom",
            11000, 12000,
            [11, 12], [12, 13], [17, 18], [18, 19]
        ],
        [
            "choose-explorers-icescoop-keys",
            11000, 12000,
            [11, 12], [12, 13], [19, 20], [20, 21]
        ],
        [
            "choose-fashionshow-vacuumtube-pokerchips",
            12000, 13000,
            [12, 13], [13, 14], [19, 20], [20, 21]
        ],
        [
            "choose-magicians-sponge-featherduster",
            11000, 12000,
            [11, 12], [12, 13], [17, 18], [19, 20]
        ],
        [
            "choose-pirates-papertoweltube-frisbee",
            10000, 11000,
            [10, 11], [11, 12], [17, 18], [18, 19]
        ],
        [
            "choose-shoppers-hanger-yellowball",
            10000, 12000,
            [10, 11], [12, 13], [17, 18], [18, 19]
        ]]
    var choose_pairings_a2 = [
        [
            "choose-astronauts-blanket-helmet",
            9000, 10000,
            [9, 10], [10, 11], [15, 16], [16, 16.9]
        ],
        [
            "choose-construction-featherduster-sponge",
            11000, 12000,
            [11, 12], [12, 13], [18, 19], [19.7, 20.6]
        ],
        [
            "choose-cowboys-stringlights-hairbrush",
            10000, 11000,
            [10, 11], [11, 12], [16, 17], [18, 19]
        ],
        [
            "choose-firefighters-pokerchips-vacuumtube",
            12000, 13000,
            [12, 13], [13, 14], [17, 18], [19.2, 20.2]
        ],
        [
            "choose-knights-yellowball-hanger",
            9000, 10000,
            [9, 10], [10, 11], [15, 16], [16.4, 17.3]
        ],
        [
            "choose-musicians-broom-socks",
            9000, 10000,
            [9, 10], [10, 11], [15, 16], [16.9, 17.7]
        ],
        [
            "choose-teaparty-frisbee-papertoweltube",
            10000, 12000,
            [10, 11], [12, 13], [18, 19], [20, 21]
        ],
        [
            "choose-trains-keys-icescoop",
            12000, 14000,
            [12, 13], [14, 15], [20, 21], [21.3, 21.9]
        ]]
    var choose_pairings_b1 = [
        [
            "choose-astronauts-helmet-blanket",
            10000, 12000,
            [10, 11], [12, 13], [17, 18], [18, 19]
        ],
        [
            "choose-cowboys-hairbrush-stringlights",
            10000, 11000,
            [10, 11], [11, 12], [17, 18], [18, 19]
        ],
        [
            "choose-construction-sponge-featherduster",
            12000, 13000,
            [12, 13], [13, 14], [19, 20], [20, 21]
        ],
        [
            "choose-firefighters-vacuumtube-pokerchips",
            12000, 13000,
            [12, 13], [13, 14], [19, 20], [20, 21]
        ],
        [
            "choose-musicians-socks-broom",
            10000, 11000,
            [10, 11], [11, 12], [17, 18], [18, 19]
        ],
        [
            "choose-knights-hanger-yellowball",
            10000, 11000,
            [10, 11], [11, 12], [17, 18], [18, 19]
        ],
        [
            "choose-trains-icescoop-keys",
            14000, 15000,
            [14, 15], [15, 16], [22, 23], [23, 24]
        ],
        [
            "choose-teaparty-papertoweltube-frisbee",
            10000, 12000,
            [10, 11], [12, 13], [18, 19], [20, 21]
        ]]
    var choose_pairings_b2 = [
        [
            "choose-campers-blanket-helmet",
            10000, 11000,
            [10, 11], [11, 12], [15, 16], [16, 17]
        ],
        [
            "choose-cooks-stringlights-hairbrush",
            11000, 12000,
            [11, 12], [12, 13], [16, 17], [18, 18.9]
        ],
        [
            "choose-doctors-broom-socks",
            10000, 11000,
            [10, 11], [11, 12], [16, 17], [17, 18]
        ],
        [
            "choose-explorers-keys-icescoop",
            10000, 12000,
            [10, 11], [12, 13], [17, 18], [18, 19]
        ],
        [
            "choose-fashionshow-pokerchips-vacuumtube",
            11400, 13090,
            [11.4, 12.4], [13.09, 14.09], [18.7, 20], [20.1, 21]
        ],
        [
            "choose-magicians-featherduster-sponge",
            11000, 12000,
            [11, 12], [12, 13], [17, 18], [18, 19]
        ],
        [
            "choose-pirates-frisbee-papertoweltube",
            9000, 10000,
            [9, 10], [10, 11], [15.16, 16], [16.4, 17.4]
        ],
        [
            "choose-shoppers-yellowball-hanger",
            10000, 11000,
            [10, 11], [11, 12], [16, 17], [17, 18]
        ]]

    // Now implement counterbalancing logic and define ordered trial sequence
    const counterbalance_group = randomItem(['a1', 'a2', 'b1', 'b2'])
    var ordered_choose_pairings = [] // This will be the sequenced list of 8 choose trials
    switch (counterbalance_group) {
        case 'a1':
            ordered_choose_pairings = shuffle(choose_pairings_a1);
            break;
        case 'a2':
            ordered_choose_pairings = shuffle(choose_pairings_a2);
            break;
        case 'b1':
            ordered_choose_pairings = shuffle(choose_pairings_b1);
            break;
        case 'b2':
            ordered_choose_pairings = shuffle(choose_pairings_b2);
            break;
    }

    // As we generate the choose frames, also fill in the scene-object pairs to use in generate
    var generate_stimuli_L = []
    var generate_stimuli_R = []

    // Create list of 8 choose frames
    for (iTrial = 0; iTrial < 8; iTrial++) {
        // First, extract frame parameters from the trial pairing definition
        // var [audio, delayL, delayR, highlightL1, highlightR1, highlightL2, highlightR2] = ordered_choose_pairings[iTrial]
        // var [condition, scene, objectL, objectR] = audio.split('-') // ['choose', 'cowboys', 'brush', 'stringlights']
        var audio = ordered_choose_pairings[iTrial][0]
        var delayL = ordered_choose_pairings[iTrial][1]
        var delayR = ordered_choose_pairings[iTrial][2]
        var highlightL1 = ordered_choose_pairings[iTrial][3]
        var highlightR1 = ordered_choose_pairings[iTrial][4]
        var highlightL2 = ordered_choose_pairings[iTrial][5]
        var highlightR2 = ordered_choose_pairings[iTrial][6]
        var scene = audio.split('-')[1]
        var objectL = audio.split('-')[2]
        var objectR = audio.split('-')[3]

        // Also store scene-object pairs for generate trials
        generate_stimuli_L.push([scene, objectL]) // first 8 pairings
        generate_stimuli_R.push([scene, objectR]) // second 8 pairings

        // Then define frame parameters
        scene_png = 'scene-' + scene + '.png' // magicians.png
        objectL_png = objectL + '.png' // socks.png
        objectR_png = objectR + '.png' // socks.png

        // Now use parameters to create this trial frame
        thisTrial = {
            "kind": "exp-lookit-images-audio",
            "baseDir": "https://raw.githubusercontent.com/wongmich/productive-pretense-lookit/choose-then-generate/",
            "audio": audio, // take from list
            "images": [ // take from list: scene, objectL, objectR
                {
                    "id": scene,  //"magicians"
                    "src": scene_png, //"scene-magicians.png",
                    "position": "fill",
                    "nonChoiceOption": true
                },
                {
                    "id": objectL + "_left", //"socks",
                    "src": objectL_png,//"socks.png",
                    "top": "55.5",
                    "left": "0.1",
                    "width": "24.3",
                    "displayDelayMs": delayL//11000
                },
                {
                    "id": objectR + "_right",//"rightbroom",
                    "src": objectR_png,//"broom.png",
                    "top": "55.5",
                    "left": "76",
                    "width": "24.3",
                    "displayDelayMs": delayR//12000
                }
            ],
            "highlights": [ // take from list
                {
                    "range": highlightL1,//[11, 12],
                    "imageId": objectL + "_left"// "socks"
                },
                {
                    "range": highlightR1,//[12, 13],
                    "imageId": objectR + "_right"//"broom"
                },
                {
                    "range": highlightL2,//[17, 18],
                    "imageId": objectL + "_left"//"socks"
                },
                {
                    "range": highlightR2,//[18, 19],
                    "imageId": objectR + "_right"//"broom"
                }
            ],
            "parentTextBlock": { // always the same
                "css": {
                    "font-size": "13pt",
                    "padding": "0.5em"
                },
                "title": "For Parents",
                "text": "Please just say 'Okay!' when your child answers - don't give any hints or say whether you agree! You can always click 'Replay' to repeat the question. \nIf your child can click on their own, let them click one of the answer choices, then click the Next button. If they can't click on their own, you can click for them."
            },
            "autoProceed": false,
            "maximizeDisplay": true,
            "pageColor": "white",
            "backgroundColor": "white",
            "choiceRequired": true,
            "showPreviousButton": false,
            "doRecording": true,
            "pauseWhenExitingFullscreen": true
        }

        // Store this trial in frame definitions and frame sequence
        frameId = 'choose-trial-' + (iTrial + 1) // remember iTrial is zero-indexed
        frames[frameId] = thisTrial;
        frame_sequence.push(frameId);

        // Add motivation videos.
        // halfway done!
        if (iTrial == 3) {
            frame_sequence.push('halfway-done')
        }
    }

    frame_sequence.push('generate-gameintro')

    // // Now define parameters for generate trials
    // // Each scene appears once in the first 8 trials and once in second 8 trials
    if (randomBoolean()) { // randomize if L objects go first or last 8 trials
        ordered_gen_pairings = shuffle(generate_stimuli_L).concat(shuffle(generate_stimuli_R))
    } else {
        ordered_gen_pairings = shuffle(generate_stimuli_R).concat(shuffle(generate_stimuli_L))
    }
    // // Check if scenes are repeated on trial 8 & 9
    if (ordered_gen_pairings[7][0] == ordered_gen_pairings[8][0]) {
        // If yes, remove trial 9 and place at end of the trial list
        ordered_gen_pairings.push(ordered_gen_pairings.splice(8, 1))
    }

    // // Create list of 16 generate frames
    for (iTrial = 0; iTrial < 16; iTrial++) {
        //[scene, object] = ordered_gen_pairings[iTrial]
        var scene = ordered_gen_pairings[iTrial][0]
        var object = ordered_gen_pairings[iTrial][1]
        // Then define frame parameters
        scene_png = 'scene-' + scene + '.png' // magicians.png
        object_png = object + '.png' // socks.png

        // Define single generate trial
        thisGenerateTrial = {
            "kind": "exp-lookit-images-audio",
            "baseDir": "https://raw.githubusercontent.com/wongmich/productive-pretense-lookit/choose-then-generate/",
            "audio": 'generate-' + scene + '-' + object, // take from list
            "images": [
                {
                    "id": scene,  //"magicians"
                    "src": scene_png, //"scene-magicians.png",
                    "width": 80,
                    "left": 0,
                    "top": 15
                },
                {
                    "id": object, //
                    "src": object_png, //
                    "position": "right",
                    "displayDelayMs": 9000
                }],
            "parentTextBlock": {
                "css": {
                    "font-size": "13pt",
                    "padding": "0.5em"
                },
                "title": "For Parents",
                "text": "Please just say 'Okay!' when your child answers - don't give any hints or say whether you agree!\nIf your child pauses for more than a few seconds, please ask them: ''Is there anything else or are you all done?'' You can repeat this for every pause."
            },

            "audioTypes": ["mp3"],
            "autoProceed": false,
            "doRecording": true,
            "choiceRequired": false,
            "showPreviousButton": false,
            "backgroundColor": "white",
            "allowUserPause": false,
            "waitForRecordingMessageColor": "black"

        }
        // Store this trial in frame definitions and frame sequence
        frameId = 'generate-trial-' + (iTrial + 1) // remember iTrial is zero-indexed
        frames[frameId] = thisGenerateTrial;
        frame_sequence.push(frameId);

        // Add motivation videos.
        // halfway done!
        if (iTrial == 7) {
            frame_sequence.push('halfway-done')
        }
        // "you're doing great!" 
        if (iTrial == 3 || iTrial == 11) {
            frame_sequence.push('lets-keep-going')
        }

    }

    // // Finish up the frame sequence with the end video and exit survey
    frame_sequence = frame_sequence.concat(['end-video', 'exit-survey'])

    // Return a study protocol with "frames" and "sequence" fields just like when
    // defining the protocol in JSON only
    return {
        frames: frames,
        sequence: frame_sequence
    }
}

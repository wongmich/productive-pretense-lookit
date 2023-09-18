function generateProtocol(child, pastSessions) {
  // ---- Helper Functions ----
  // returns random coin flip as true or false
  function randomBoolean() {
    return Boolean(Math.floor(Math.random() * 2));
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

  let frames = {
    "video-config": {
      "kind": "exp-video-config",
      "troubleshootingIntro": "If you're having any trouble or would like us to walk you through setup, please email michellewong@fas.harvard.edu"
    },

    "video-consent": {
      "kind": "exp-lookit-video-consent",
      "template": "consent_005",
      "PIName": "Michelle Wong",
      "institution": "Harvard University",
      "PIContact": "Michelle Wong at michellewong@fas.harvard.edu",
      "purpose_header": "Key Information",
      "purpose": "The following is a short summary of this study to help you decide whether or not you want your child to be a part of this study. More detailed information is listed later on in this form. \n<b>Why is my child being invited to take part in a research study?</b> We invite your child to take part in a research study because they are of a specific age which is relevant to study the developmental construct of interest. \n <b>What should I know about a research study?</b> An experimenter will verbally explain this research study to you and your child. Whether or not you take part is up to you and your child. Your child’s participation is completely voluntary. You and your child can choose not to take part. You and your child can agree to take part and later change your mind. You and your child’s decision will not be held against you. You and your child’s refusal to participate will not result in any consequences or any loss of benefits that you and your child are otherwise entitled to receive. You and your child can ask all the questions you want before you decide. \n<b>Why is this research being done?</b> The purpose of the research is to understand how children are able to learn so much from their interactions with objects, events, and other people. We are currently studying individuals’ learning and development in multiple domains, including causal, visual, language and memory. \n<b>How long will the research last and what will my child need to do?</b> This study will take approximately 15 minutes to complete. During the session, your child may watch a video clip, play a game on the computer, read a book, hear a story, or look at pictures. They may be asked to make judgements, answer questions (such as making predictions and providing explanations), learn from and teach others (including you, their parent), observe events, and perform interactive tasks with objects on the screen while the experimenter observes their behavior. There are no 'right or wrong' responses to any of these questions or tasks—we simply want to find out how children of this age understand and explore objects and situations. We MAY measure where your child is looking through your web camera while your child is participating in these games. Please note that you and your child are NOT being evaluated academically or psychologically, we are simply conducting basic research. \n<b>Is there any way being in this study could be bad for my child?</b> We don’t believe there are any risks for your child from participating in this research. \n<b>Will being in this study help my child in any way?</b> There are no direct benefits to your child from your taking part in this research. We cannot promise any benefits to others from your child taking part in this research. However, possible benefits to others include furthering the field’s understanding of cognitive development.",
      "additional_segments": [
        {
          "title": "Data removal",
          "text": "The person in charge of the research study or the sponsor can remove your child from the research study without your approval. Possible reasons for removal include instances where the participant does not meet the eligibility criteria for the study, which may be determined by their responses to one or more of our questions during the research."
        },
        {
          "title": "What else do I need to know?",
          "text": "This research is being funded by the Templeton Foundation, NSF, the James F. McDonnell Foundation, the Jacobs Foundation, the Mind, Brain, and Behavior initiative at Harvard, and funds awarded to Elizabeth Bonawitz from the Harvard Graduate School of Education."
        }],
      "procedures": "\nYour child will see pictures of different places and objects to play pretend with. We will ask your child to choose which object they would rather play with.",
      "risk_statement": "We don’t believe there are any risks for your child from participating in this research.",
      "payment": "After you finish the study, we will email you a $5 Amazon.com (USD) gift card within approximately one week. To be eligible for the gift card, your child must meet all eligibility criteria (e.g., be in the age range for this study), you need to submit a valid consent statement, and we need to see that there is a child with you. Additionally, your child may only participate in this study once in order to be eligible for compensation. \nYour child can leave the research at any time and it will not be held against your child. If you or your child wishes to stop, we will end the session without penalty, and we will still send a gift card. \nThere are no other direct benefits to your child from your taking part in this research, though we hope you will enjoy the experience! Possible benefits to others include furthering the field's understanding of cognitive development.",
      "datause": "We are primarily interested in the ratings your child provides. A research assistant may also watch your videos to code any spontaneous speech your child generates during the task. \nEfforts will be made to limit the use and disclosure of your child’s Personal Information, including research participation and any information you provide on this form, to people who have a need to review this information. We cannot promise complete secrecy. Organizations that may inspect and copy your child’s information include the IRB and other representatives of this organization. If identifiers are removed from your child’s identifiable private information that is collected during this research, that information could be used for future research studies or distributed to another investigator for future research studies without you or your child’s additional informed consent.",
      "include_databrary": true,
      "gdpr": false,
      "research_rights_statement": "You are not waiving any legal claims, rights or remedies because of your participation in this research study.  If you have questions, concerns, or complaints, you can contact our Principal Investigator, Dr. Elizabeth Bonawitz [elizabeth_bonawitz@gse.harvard.edu] or our lab manager Jiayi Wang [jiayiwang@fas.harvard.edu]. If you feel you have been treated unfairly, or you have questions regarding your rights as a research subject, you may contact Harvard's Committee on the Use of Human Subjects (cuhs@harvard.edu)."
    },
    "study-preview": {
      "kind": "exp-lookit-stimuli-preview",
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
          "text": "During this study, we will present 16 different pretend play scenarios. In each scene, your child will choose which object they would rather play pretend with."
        },
        {
          "text": "Before we start, if you'd like to preview the sort of images that your child will see, you can do that now. Importantly, you should watch the sample video without your child."
        }
      ],
      "baseDir": "https://raw.githubusercontent.com/wongmich/productive-pretense-lookit/protocol-generator/condition-choose",
      "stimuli": [
        {
          "video": "PP Stimuli Condition 1",
          "caption": "Here's a sample of what the images and choices will look like:"
        }
      ],
      "videoTypes": ["webm", "mp4"],
      "skipButtonText": "Skip preview",
      "previewButtonText": "I'd like to preview the video",
      "doRecording": false
    },
    "study-instructions": {
      "kind": "exp-lookit-instructions",
      "blocks": [
        {
          "title": "Parent's role",
          "listblocks": [
            {
              "text": "Please just wait for your child to answer and say 'Okay!' when they're done sharing - don't give any hints or say whether you agree!"
            },
            {
              "text": "You can always click 'Replay' to repeat the question for them."
            },
            {
              "text": "If your child can click on their own, let them click one of the answer choices, then click the Next button. If they can't click on their own, you can click for them."
            }
          ]
        },
        {
          "title": "Pausing and stopping",
          "listblocks": [
            {
              "text": "If your child gets fussy or distracted, or you need to attend to something for a moment, you can pause the study by pressing the space key on the keyboard."
            },
            {
              "text": "If you need to end the study early, try closing the window and you should see an ‘exit’ option pop up. You’ll be prompted to note any technical problems you might be experiencing and to select a privacy level for your video."
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
                "src": "https://raw.githubusercontent.com/ncuneo0711/lookit-stimuli-template/master/mp3/TestAudio.mp3",
                "type": "audio/mp3"
              },
              {
                "src": "https://raw.githubusercontent.com/ncuneo0711/lookit-stimuli-template/master/ogg/TestAudio.ogg",
                "type": "audio/ogg"
              }
            ],
            "mustPlay": true,
            "warningText": "Please try playing the sample audio."
          }
        }
      ],
      "showWebcam": true,
      "webcamBlocks": [
        {
          "title": "Camera position",
          "listblocks": [
            {
              "text": "Try to position yourselves so that we can see your child throughout the study."
            },
            {
              "text": "Don’t worry if your child isn’t looking at the screen the entire time! What's important is that the child is in front of the screen the whole time and can make the choices. We made it as short as we could, in the hopes your child won't get bored!"
            }
          ]
        }
      ],
      "nextButtonText": "Next"
    },
    "intro-video": {
      "kind": "exp-lookit-video",
      "video": {
        "loop": false,
        "position": "fill",
        "source": "choosinggameintro"
      },
      "backgroundColor": "white",
      "autoProceed": false,
      "showPreviousButton": false,
      "requireVideoCount": 1,
      "doRecording": false,
      "frameOffsetAfterPause": 0,
      "baseDir": "https://raw.githubusercontent.com/wongmich/productive-pretense-lookit/protocol-generator/condition-choose/",
      "videoTypes": ["mp4"]
    },
    "intro-practice": {
      "kind": "exp-lookit-images-audio",
      "audio": "warmup_letspractice (enhanced)",
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
      "baseDir": "https://raw.githubusercontent.com/wongmich/productive-pretense-lookit/protocol-generator/condition-choose/"
    },
    "intro-practice-choices": {
      "kind": "exp-lookit-images-audio",
      "audio": "warmup_whichwould (enhanced)",
      "images": [
        {
          "id": "warmupgamebg",
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
          "feedbackAudio": "warmup_greatSQUIRRELintro (enhanced)"
        },
        {
          "id": "bird",
          "src": "introbird.png",
          "top": "55.5",
          "left": "0.1",
          "width": "24.3",
          "displayDelayMs": 5000,
          "correct": true,
          "feedbackAudio": "warmup_greatBIRDintro (enhanced)"
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
      "doRecording": false,
      "baseDir": "https://raw.githubusercontent.com/wongmich/productive-pretense-lookit/protocol-generator/condition-choose/",
      "nextButtonText": "Next",
      "choiceRequired": true
    },
    "end-video": {
      "kind": "exp-lookit-video",
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
      "baseDir": "https://raw.githubusercontent.com/wongmich/productive-pretense-lookit/protocol-generator/condition-choose/",
      "videoTypes": ["mp4"]
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
            "text": "Play, including pretend play, is a common part of early childhood. However, researchers are still studying how play behaviors develop, and how play affects children's learning and development. Because play is so variable across individual children, it can be tricky to carefully measure and study how children think and make decisions during play.\n\nIn this research, we look at which objects children choose to play pretend with. Do children prefer objects that offer more possibilities for imagining with? Or do they prefer objects that they can very quickly imagine as something else, even if they can only think of one idea?\n\nTo answer these questions, we are running two studies. This current study measures which objects children prefer. Another study measures what ideas children come up with. By combining the data from both studies, we can better understand how children think about pretend possibilities, and how children choose what to play with. We are also interested in how children's pretend play relates to other aspects of their development, such as language."
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
    "lets-keep-going": {
      "kind": "exp-lookit-video",
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
      "frameOffsetAfterPause": 0,
      "baseDir": "https://raw.githubusercontent.com/wongmich/productive-pretense-lookit/protocol-generator/condition-choose/",
      "videoTypes": ["mp4"]
    },
    "halfway-done": {
      "kind": "exp-lookit-video",
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
      "frameOffsetAfterPause": 0,
      "baseDir": "https://raw.githubusercontent.com/wongmich/productive-pretense-lookit/protocol-generator/condition-choose/",
      "videoTypes": ["mp4"]
    }
  }

  // Start off the frame sequence with config/consent/introduction frames
  // so far, we have 7 initial frames
  // NOTE: WHILE TESTING, SKIP INITIAL FRAMES by using an empty list []
  let frame_sequence = ['video-config', 'video-consent', 'study-preview', 'study-instructions', 'intro-video', 'intro-practice', 'intro-practice-choices']
  // Now define parameters for test trials
  // each element is a size 7 list:
  // [ audio = choose-scene-objectL-objectR
  //   objectL_delay, objectR_delay
  //   objectL_hl1, objectR_hl1, objectL_hl2, objectR_hl2
  // ]
  // NOTE: audio should filenames in baseDir/mp3
  // NOTE: since audio filename includes all other object names, we can just use the audio filename to define the rest of the trial
  // to reduce chance of typos 
  let trial_pairings_a1 = [
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
      "choose-shoppers-hanger-tennisball",
      10000, 12000,
      [10, 11], [12, 13], [17, 18], [18, 19]
    ]]
  let trial_pairings_a2 = [
    [
      "choose-astronauts-blanket-helmet",
      9000, 10000,
      [9, 10], [10, 11], [15, 16], [16, 16.9]
    ],
    [
      "choose-constructionbuilders-featherduster-sponge",
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
      "choose-knights-tennisball-hanger",
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
  let trial_pairings_b1 = [
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
      "choose-constructionbuilders-sponge-featherduster",
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
      "choose-knights-hanger-tennisball",
      10000, 11000,
      [10, 11], [11, 12], [17, 18], [18, 19]
    ],
    [
      "choose-trains-icescoop-keys",
      11000, 13000,
      [11, 12], [13, 14], [19, 20], [20, 21]
    ],
    [
      "choose-teaparty-papertoweltube-frisbee",
      10000, 12000,
      [10, 11], [12, 13], [18, 19], [20, 21]
    ]]
  let trial_pairings_b2 = [
    [
      "choose-campers-blanket-helmet",
      10000, 11000,
      [10, 11], [11, 12], [15, 16], [16, 17]
    ],
    [
      "choose-cooks-stringlights-hairbrush",
      11000, 12000,
      [11, 12], [12, 13], [16, 17], [18, 18.7]
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
      "choose-shoppers-tennisball-hanger",
      10000, 11000,
      [10, 11], [11, 12], [16, 17], [17, 18]
    ]]

  // Now implement counterbalancing logic and define ordered trial sequence
  const counterbalanced_stimuliset = randomBoolean() ? 'a' : 'b' // choose one
  const counterbalanced_blockorder = randomBoolean() ? '1' : '2' // choose one
  const counterbalance_group = counterbalanced_stimuliset + counterbalanced_blockorder
  var ordered_trial_pairings = [] // This will be the sequenced list of 16 trials
  switch (counterbalance_group) {
    case 'a1':
      ordered_trial_pairings = shuffle(trial_pairings_a1).concat(shuffle(trial_pairings_a2))
    case 'a2':
      ordered_trial_pairings = shuffle(trial_pairings_a2).concat(shuffle(trial_pairings_a1))
    case 'b1':
      ordered_trial_pairings = shuffle(trial_pairings_b1).concat(shuffle(trial_pairings_b2))
    case 'b2':
      ordered_trial_pairings = shuffle(trial_pairings_b2).concat(shuffle(trial_pairings_b1))
  }

  // Check if objects are repeated on trial 8 & 9
  if (ordered_trial_pairings[7][0].split('-')[2] == ordered_trial_pairings[8][0].split('-')[3]) {
    // If yes, remove trial 9 and place at end of the trial list
    ordered_trial_pairings.push(ordered_trial_pairings.splice(8, 1)[0])
  }

  // Create list of 16 frames
  for (iTrial = 0; iTrial < 16; iTrial++) {
    // First, extract frame parameters from the trial pairing definition
    let [audio, delayL, delayR, highlightL1, highlightR1, highlightL2, highlightR2] = ordered_trial_pairings[iTrial]
    let [condition, scene, objectL, objectR] = audio.split('-') // ['choose', 'cowboys', 'brush', 'stringlights']

    scene_png = 'scene-' + scene + '.png' // magicians.png
    objectL_png = objectL + '.png' // socks.png
    objectR_png = objectR + '.png' // socks.png

    // Use parameters to create this trial frame
    thisTrial = {
      "kind": "exp-lookit-images-audio",
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
      "baseDir": "https://raw.githubusercontent.com/wongmich/productive-pretense-lookit/protocol-generator/condition-choose/",
      "autoProceed": false,
      "maximizeDisplay": true,
      "pageColor": "white",
      "backgroundColor": "white",
      "doRecording": false,
      "choiceRequired": true,
      "showPreviousButton": false,
      "pauseWhenExitingFullscreen": true
    }

    // Store this trial in frame definitions and frame sequence
    frameId = 'test-trial-' + (iTrial + 1) // remember iTrial is zero-indexed
    frames[frameId] = thisTrial;
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

  // Finish up the frame sequence with the end video and exit survey
  frame_sequence = frame_sequence.concat(['end-video', 'exit-survey'])

  // Return a study protocol with "frames" and "sequence" fields just like when
  // defining the protocol in JSON only
  return {
    frames: frames,
    sequence: frame_sequence
  }
}
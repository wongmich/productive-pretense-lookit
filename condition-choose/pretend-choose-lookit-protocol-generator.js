function generateProtocol(child, pastSessions) {
  // ---- Helper Functions ----
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

  // Returns a random element of an array, and removes that element from the array
  function pop_random(array) {
    if (array.length) {
      let randIndex = Math.floor(Math.random() * array.length);
      return array.splice(randIndex, 1)[0];
    }
    return null;
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
      "PIContact": "michellewong@fas.harvard.edu",
      "purpose": "We're interested in how children think about pretend play and what shapes their pretend play preferences. Recent research has shown that children at play often invent novel goals, but we don't know how children actually decide which goals and which pretend scenarios to play with. In this study, we want to learn more about how children choose what to play, and how they creatively exercise their imagination.",
      "procedures": "Your child will see pictures of different places and objects to play pretend with. We will ask your child to choose which object they would rather play with.",
      "risk_statement": "There are no expected risks if you participate in the study.",
      "payment": "After you finish the study, we will email you a $5 Amazon gift card within approximately one week. To be eligible for the gift card, your child must meet all eligibility criteria (e.g., be in the age range for this study), you need to submit a valid consent statement, and we need to see that there is a child with you. Additionally, your child may only participate in this study once in order to be eligible for compensation. There may be multiple versions of this study posted over time, but only your first participation will count for compensation. However, even if you do not finish the whole study or we are not able to use your child's data, we will still send a gift card! There are no other direct benefits to you or your child from participating, but we hope you will enjoy the experience.",
      "datause": "We are primarily interested in the answers your child provides.",
      "include_databrary": true,
      "gdpr": false,
      "research_rights_statement": "You are not waiving any legal claims, rights or remedies because of your participation in this research study.  If you feel you have been treated unfairly, or you have questions regarding your rights as a research subject, you may contact Harvard's Committee on the Use of Human Subjects (cuhs@harvard.edu)."
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
      "baseDir": "https://raw.githubusercontent.com/wongmich/productive-pretense-lookit/master/condition-choose",
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
      "baseDir": "https://raw.githubusercontent.com/wongmich/productive-pretense-lookit/master/condition-choose/",
      "videoTypes": ["mp4"]
    },
    "intro-practice": {
      "kind": "exp-lookit-images-audio",
      "audio": "warmup_letspractice (enhanced)",
      "images": [
        {
          "id": "meadowslide",
          "src": "introgame.png",
          "position": "fill",
          "nonChoiceOption": true
        }
      ],
      "backgroundColor": "white",
      "autoProceed": true,
      "doRecording": false,
      "baseDir": "https://raw.githubusercontent.com/wongmich/productive-pretense-lookit/master/condition-choose/"
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
          "id": "squirrelchoice",
          "src": "introsquirrel.png",
          "top": "54",
          "left": "76",
          "width": "24.3",
          "displayDelayMs": 7000,
          "correct": true,
          "feedbackAudio": "warmup_greatSQUIRRELintro (enhanced)"
        },
        {
          "id": "birdchoice",
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
          "imageId": "squirrelchoice"
        },
        {
          "range": [5, 6],
          "imageId": "birdchoice"
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
      "baseDir": "https://raw.githubusercontent.com/wongmich/productive-pretense-lookit/master/condition-choose/",
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
      "baseDir": "https://raw.githubusercontent.com/wongmich/productive-pretense-lookit/master/condition-choose/",
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
            "text": "Play, including pretend play, is a common part of early childhood. However, researchers are still studying how play behaviors develop, and how play affects children's learning and development. Because play is so variable across individual children, it can be tricky to carefully measure and study how children think and make decisions during play.\nIn this research, we look at which objects children choose to play pretend with. Do children prefer objects that offer more possibilities for imagining with? Or do they prefer objects that they can very quickly imagine as something else, even if they can only think of one idea?\nTo answer these questions, we are running two studies. This current study measures which objects children prefer. Another study measures what ideas children come up with. By combining the data from both studies, we can better understand how children think about pretend possibilities, and how children choose what to play with. We are also interested in how children's pretend play relates to other aspects of their development, such as language."
          },
          {
            "title": "Compensation:",
            "text": "To thank you for your participation, we'll be emailing you a $5 Amazon gift card - this should arrive in your inbox within the next week after we confirm your consent video and check that your child is in the age range for this study (If you don't hear from us by then, feel free to reach out!). If you participate again with another child in the age range, you'll receive one gift card per child."
          },
          {
            "title": "Questions or Concerns:",
            "text": "Please do not hesitate to contact Michelle Wong at michellewong@fas.harvard.edu"
          }
        ]
      }
    }

  }

  // Start off the frame sequence with config/consent/introduction frames
  // so far, we have 7 initial frames
  let frame_sequence = ['video-config', 'video-consent', 'study-preview', 'study-instructions', 'intro-video', 'intro-practice', 'intro-practice-choices']

  // Now add test trials
  // start at a random point in this list and cycle through across trials.

  // Choose a random starting point and shuffle

  // Define parameters for the single trial
  theslideid, audio, thescenepng, option_left, image_left, delay_left,
    option_right, image_right, delay_right,
    highlight1_left, highlight1_right, highlight2_left, highlight2_right

  choose_explorers_order1_object1_object2.mp3
  choose - magicians - object1 - object2
  choose - magicians - object2 - object1
  choose - explorers - object2 - object1

  //each element is a size 10 list: 
  // audio, scene, object1, object2,
  // option1_delay, option2_delay
  // option1_hl1, option2_hl1, option1_hl2, option2_hl2
  // NOTE: object1 and object2 match up to keys in available_images;
  // NOTE: audio should filenames in baseDir/mp3
  let all_trial_pairings = [
    [
      "choose-order1-doctor-socks-broom.mp3", "scene1", "socks", "broom",
      11000, 12000,
      [11, 12], [12, 13], [17, 18], [18, 19]
    ],
    [
      "choose-order1-shopper-hanger-tennisball.mp3", "scene2", "hanger", "tennisball",
      10000, 12000,
      [10, 11], [12, 13], [17, 18], [18, 19]
    ],
    [
      "choose-order1-campers-helmet-blanket.mp3", "scene3", "helmet", "blanket",
      11000, 12000,
      [11, 12], [12, 13], [17, 18], [18, 19]
    ],
    [
      "choose-order1-explorers-icescoop-keys.mp3", "scene4", "icecreamscooper", "keys", 
      11000, 12000,
      [11, 12], [12, 13], [19, 20], [20, 21]
    ],
    [
      "choose-order1-cooks-hairbrush-stringlights.mp3", "scene5", "brush", "stringlights",
      11000, 12000,
      [11, 12], [12, 13], [17, 18], [18, 19]
    ],
    [
      "choose-order1-magicians-sponge-featherduster.mp3", "scene6", "sponge", "featherduster",
      11000, 12000,
      [11, 12], [12, 13], [17, 18], [19, 20]
    ],
    [
      "choose-order1-pirates-papertoweltube-frisbee.mp3", "scene7", "papertoweltube", "frisbee",
      10000, 11000,
      [10, 11], [11, 12], [17, 18], [18, 19]
    ],
    [
      "choose-order1-fashionshow-vacuumtube-pokerchips.mp3", "scene8", "vacuumtube", "pokerchips",
      12000, 13000,
      [12, 13], [13, 14], [19, 20], [20, 21]
    ],
    [
      "choose-order2-musicians-broom-socks.mp3", "2scene1", "broom", "socks",
      9000, 10000,
      [9, 10], [10, 11], [15, 16], [16.9, 17.7]
    ],
    [
      "choose-order2-knights-tennisball-hanger.mp3", "2scene2", "tennisball", "hanger",
      9000, 10000,
      [9, 10], [10, 11], [15, 16], [16.4, 17.3]
    ],
    [
      "choose-order2-astronauts-blanket-helmet.mp3", "2scene3", "blanket", "helmet",
      9000, 10000,
      [9, 10], [10, 11], [15, 16], [16, 16.9]
    ],
    [
      "choose-order2-trainstationconductors-keys-icescoop.mp3", "2scene4", "keys", "icecreamscooper",
      12000, 14000,
      [12, 13], [14, 15], [20, 21], [21.3, 21.9]
    ],
    [
      "choose-order2-cowboys-stringlights-hairbrush.mp3", "2scene5", "stringlights", "brush",
      10000, 11000,
      [10, 11], [11, 12], [16, 17], [18, 19]
    ],
    [
      "choose-order2-constructionbuilders-featherduster-sponge.mp3", "2scene6", "featherduster", "sponge",
      11000, 12000,
      [11, 12], [12, 13], [18, 19], [19.7, 20.6]
    ],
    [
      "choose-order2-teapartyguests-frisbee-papertoweltube.mp3", "2scene7", "frisbee", "papertoweltube",
      10000, 12000, 
      [10, 11], [12, 13], [18, 19], [20, 21]
    ],
    [
      "choose-order2-firefighters-pokerchips-vacuumtube.mp3", "2scene8", "pokerchips", "vacuumtube",
      12000, 13000,
      [12, 13], [13, 14], [17, 18], [19.2, 20.2]
    ],
    [
      "choose-order1-musicians-socks-broom.mp3", "2scene1", "socks", "broom",
      10000, 11000, 
      [10, 11], [11, 12], [17, 18], [18, 19]  
    ],
    [
      "choose-order1-knights-hanger-tennisball.mp3", "2scene2", "hanger", "tennisball", 
      10000, 11000, 
      [10, 11], [11, 12], [17, 18], [18, 19]
    ],
    [
      "choose-order1-astronauts-helmet-blanket.mp3", "2scene3", "helmet", "blanket",
      10000, 12000, 
      [10, 11], [12, 13], [17, 18], [18, 19]
    ],
    [
      "choose-order1-trains-icescoop-keys.mp3", "2scene4", "icecreamscooper", "keys",
      14000, 15000,
      [14, 15], [15, 16], [22, 23], [23, 24]
    ],
    [
      "choose-order1-cowboys-hairbrush-stringlights.mp3", "2scene5", "brush", "stringlights",
      10000, 11000, 
      [10, 11], [11, 12], 17, 18], [18, 19]
    ],
    [
      "choose-order1-constructionbuilders-sponge-featherduster.mp3", "2scene6", "sponge", "featherduster",
      12000, 13000,
      [12, 13], [13, 14], [19, 20], [20, 21]
    ],
    [
      "choose-order1-teaparty-papertoweltube-frisbee.mp3", "2scene7", "papertoweltube", "frisbee",
      10000, 12000, 
      [10, 11], [12, 13], [18, 19], [20, 21]
    ],
    [
      "choose-order1-firefighters-vacuumtube-pokerchips.mp3", "2scene8", "vaccumtube", "pokerchips",
      12000, 13000,
      [12, 13], [13, 14], [19, 20], [20, 21]
    ],
    [
      "choose-order2-doctors-broom-socks.mp3", "scene1", "broom", "socks",
      10000, 11000,
      [10, 11], [11, 12], 16, 17], [17, 18]
    ],
    [
      "choose-order2-shoppers-tennisball-hanger.mp3", "scene2", "tennisball", "hanger",
      10000, 11000,
      [10, 11], [11, 12], [16, 17], [17, 18]
    ],
    [
      "choose-order2-campers-blanket-helmet.mp3", "scene3", "blanket", "helmet", 
      10000, 11000, 
      [10, 11], [11, 12], [15, 16], [16, 17]
    ],
    [
      "choose-order2-explorers-keys-icescoop.mp3", "scene4", "keys", "icecreamscooper",
      10000, 12000, 
      [10, 11, [12, 13], [17, 18], [18, 19]
    ],
    [
      "choose-order2-cooks-stringlights-hairbrush.mp3", "scene5", "stringlights", "brush", 
      11000, 12000,
      [11, 12], [12, 13], [16, 17], [18, 18.9]
    ],
    [
      "choose-order2-magicians-featherduster-sponge.mp3", "scene6", "featherduster", "sponge", 
      11000, 12000,
      [11, 12], [12, 13], [17, 18], [18, 19]
    ],
    [
      "choose-order2-pirates-frisbee-papertoweltube.mp3", "scene7", "frisbee", "papertoweltube", 
      9000, 10000,
      [9, 10], [10, 11], [15.16, 16], [16.4, 17.4]
    ],
    [
      "choose-order2-fashionshowmodels-pokerchips-vacuumtube.mp3", "scene8", "pokerchips", "vacuumtube", 
      11400, 13090,
      [11.4, 12.4], [13.09, 14.09], [18.7, 20], [20.1, 21]
    ]
  ]
  // Choose a random starting point and order for the stimuli pairings
  let ordered_trial_pairings_0 = shuffle(all_trial_pairings.slice(0, 8))
  let ordered_trial_pairings_1 = shuffle(all_trial_pairings.slice(8, 8))

  // Create list of 16 trials
  for (iBlock = 0; iBlock < 2, iBlock++;) {
    for (iTrial = 0; iTrial < 8, iTrial++;) {
      // First, extract frame parameters from the trial pairing definition
      let trial_pairing = ordered_trial_pairings_1[iTrial]
      let audio = trial_pairing[0]
      let scene = trial_pairing[1]
      let object1 = trial_pairing[2]
      let object2 = trial_pairing[3]

      // Then, define highlight timings
      scene_png = scene + '.png', // magicians.png
        option_left_png = option1 + '.png', // socks.png
        option_right_png = option2 + '.png', // socks.png
        delay_left = option1_delay, //11000
        highlight1_left = option1_hl1,//[11, 12],
        highlight2_left = option1_hl2,//[17, 18],
        delay_right = option2_delay,//12000,
        highlight1_right = option2_hl1,//[12, 13],
        highlight2_right = option2_hl2,//[18, 19],

        // Use parameters to create trial frame
        thisTrial = {
          "kind": "exp-lookit-images-audio",
          "audio": "choosing-doctor (enhanced)", // take from list
          "images": [ // take from list: scene, left, right
            {
              "id": theslide, //"slide1",
              "src": thescenepng, //"scene1.png",
              "position": "fill",
              "nonChoiceOption": true
            },
            {
              "id": option_left,//"leftsocks",
              "src": image_left,//"socks.png",
              "top": "55.5",
              "left": "0.1",
              "width": "24.3",
              "displayDelayMs": delay_left//11000
            },
            {
              "id": option_right,//"rightbroom",
              "src": image_right,//"broom.png",
              "top": "55.5",
              "left": "76",
              "width": "24.3",
              "displayDelayMs": delay_right//12000
            }
          ],
          "highlights": [ // take from list
            {
              "range": highlight1_left,//[11, 12],
              "imageId": option_left// "leftsocks"
            },
            {
              "range": highlight1_right,//[12, 13],
              "imageId": option_right//"rightbroom"
            },
            {
              "range": highlight2_left,//[17, 18],
              "imageId": option_left//"leftsocks"
            },
            {
              "range": highlight2_right,//[18, 19],
              "imageId": option_right//"rightbroom"
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
          "baseDir": "https://raw.githubusercontent.com/wongmich/productive-pretense-lookit/master/condition-choose/",
          "autoProceed": false,
          "maximizeDisplay": true,
          "pageColor": "white",
          "backgroundColor": "white",
          "doRecording": false,
          "choiceRequired": true,
          "showPreviousButton": false,
          "pauseWhenExitingFullscreen": true
        }




    }

    // Store this frame in frames and in the sequence
    frameId = 'test-trial-' + (iTrial + 1)
    frames[frameID] = thisTrial;
    frame_sequence.push(frameId);

    // After the fourth trial, push the feedback trial as well
    if (iTrial % 4 == 3) {
      // insert feedback trial

      iTrial++
    }
  }
}



// Finish up the frame sequence with the end video and exit survey
frame_sequence = frame_sequence.concat(['end-video', 'exit-survey'])

// Return a study protocol with "frames" and "sequence" fields just like when
// defining the protocol in JSON only
return {
  frames: frames,
  sequence: frame_sequence
};
}

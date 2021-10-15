// Set global variables
let kStoryTextEl = document.getElementById('story-text');
let kButtonOptionsEl = document.getElementById('button-options');
let kBgImage = document.getElementById('bg-image');

// Create startStory function
function kStartStory() {
    kShowScene(1)
}

// Create show scene function
function kShowScene(sceneIndex) {
    let scene = scenes.find(scene => scene.id === sceneIndex)
    kStoryTextEl.innerText = scene.text;
    kBgImage.style.backgroundImage = scene.background;
    while (kButtonOptionsEl.firstChild) {
        kButtonOptionsEl.removeChild(kButtonOptionsEl.firstChild);
    }

    // loop through options and create button for each
    scene.options.forEach(option => {
        let button = document.createElement('button')
        button.innertext = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => optionSelect(option)) 
        buttonOptionsEl.appendChild(button)
    })
}

function optionSelect(option) {
    let nextSceneId = option.nextScene
    if (nextSceneId <= 0) {
        return startStory()
    }
    showScene(nextSceneId)
}

// Define scenes
let scenes = [
    {
        id: 1,
        text: "Test Scene 1",
        background: " ",
        options: [
            {
                option: "Test Option 1",
                nextScene: 2
            },
            {
                option: "Test Option 2",
            },
            {
                option: "Test Option 3",
            }
        ]
    },
    {
        id: 2,
        text: "Test Scene 2",
        background: " ",
        options: [
            {
                option: "Test Option 1",
                nextScene: 3
            },
            {
                option: "Test Option 2",
            },
            {
                option: "Test Option 3",
            }
        ]
    },
    {
        id: 101,
        text: "Test The End",
        background: " ",
        options: [
            {
                option: "Test Restart",
                nextScene: -1,
            },
        ]
    },
]

// Start the story
startStory()



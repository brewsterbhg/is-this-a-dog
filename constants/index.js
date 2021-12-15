export const LOADING_MESSAGES = [
  'Loading Dog Identification Engine...',
  'Waking Up The Data Scientists...',
  'Letting The Dogs Out...',
  'Loading The Fetch API...',
  'Retrieving Results From The Lab...',
  'Unleashing The Scientific Method...',
  'Recording Results For Pawsterity...',
]
export const LOADING_INTERVAL = 1300
export const RESULT_MESSAGES = {
  NO_SCORE: 'Okay this is obviously not a dog. Do you even know what a dog is?',
  BAD_SCORE: "It's quite probable that this is not a picture of a dog.",
  LOW_SCORE:
    "There's definitely some dog-like features, but I can't say for sure that this is a dog.",
  NEUTRAL_SCORE:
    "There's a medium-to-good chance that this is a picture of a dog we're looking at.",
  GOOD_SCORE: "I can say with good confidence that we're looking at a picture of a dog here.",
  GREAT_SCORE: 'You can bet your boots that this is a picture of a dog.',
  PERFECT_SCORE: 'This is—unequivocally, without a single doubt—a picture of a dog.',
}

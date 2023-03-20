const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storyText = 'It was 90 fahrenheit outside, so :insertx: went for a jog. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 270 pounds, and it was a hot day.';
const insertX = ['Jesus','Lady Gaga','Snoop Dog'];
const insertY = ['Cabo','Epcot','Alaska'];
const insertZ = ['jumped to the moon','sat on the sidewalk','turned into a bee, stung everyone in sight, and flew away'];

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


function result() {
  let newStory = storyText;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
  newStory = newStory.replace(':insertx:',xItem).replace(':insertx:',xItem).replace(':inserty:',yItem).replace(':insertz:',zItem);

  if(customName.value !== '') {
    let name = customName.value;
    newStory =  newStory.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.07).toString() + ' stone';
    const temperature =  Math.round((94-32)/1.8).toString() + ' centigrade';
    newStory =  newStory.replace('94 fahrenheit',temperature).replace('300 pounds',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

randomize.addEventListener('click', result);
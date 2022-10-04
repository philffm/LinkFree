const iname =  new URLSearchParams(window.location.search).get('n');
var websiteMode =  new URLSearchParams(window.location.search).get('mode');
if(websiteMode == null){websiteMode = window.location.hostname.split(".")[0]}
const url = window.location.href

console.log(iname);
console.log(url);

if (iname){
    
    document.querySelectorAll('#userNameFull')[0].innerHTML = ('Yay, '+ iname + '✨')
    
}



switch(websiteMode) {
    case 'farewell':
        console.log('farewell!');
        document.querySelectorAll('#links > div > h2:nth-child(2)')[0].innerHTML = ('Time to say good bye - for now')
        document.querySelectorAll('.emoji')[0].innerHTML = ('👋')
        document.querySelectorAll('.invite')[0].innerHTML = ("Dear friend, since I'll be moving to Frankfurt 🌆 soon it's time to say good bye (for now). But let's not make it harder than it is and come over for some cake, tea & Singstar. I'll most likely move out on the 15th - and since time is running fast I decided to have two occasions. Pick whatever suits you better)");
        document.querySelectorAll('.rsvp h2')[0].innerHTML = ("RSVP");
        document.querySelectorAll('.rsvp h2')[0].innerHTML = ("RSVP");
        document.querySelectorAll('.whatsappgroup')[0].innerHTML = ("If you fancy joining a WhatsApp group (for photos and stuff) :)");
        document.querySelectorAll('.savedate')[0].innerHTML  = ('📆 14. October 2022')
        document.querySelectorAll('#groupinvite')[0].href  = ('https://chat.whatsapp.com/FM0mmiP8tHTIjwujvYHBnU')
        document.querySelectorAll('#calinvite')[0].href  = ('webcal://calendar.google.com/calendar/ical/0cue9opjntq7h2tnvb1io9e6h0%40group.calendar.google.com/public/basic.ics')
        // document.querySelectorAll('#userNameFull')[0].innerHTML = ('Yay, '+ 'farewell' + '✨')
        document.querySelectorAll('.partytheme')[0].innerHTML = ('👉 The theme is "I went to a kringloop in a bathrobe on a cosy autumn day and I found this..." - thus feel free to combine your outfit with something (aesthetic or not so aesthetic) you found in a thrift store - or just a lazy bathrobe :D')
        break;
        case 'bday':
            document.querySelectorAll('.invite')[0].innerHTML = ("👋 Hoi friend. You are invited! And since you might be familiar with my spontaneous nature, the unpredicability of Dutch weather and my love for chaotic WhatsApp groups I created this live calendar feed / blocker to subscribe to and stay up to date 🙌 🙂)");
            document.querySelectorAll('#links > div > h2:nth-child(2)')[0].innerHTML = ("Let's celebrate my 9861th day on earth")
            console.log('bday!');
      break;
    default:
      // code block
  }


function hideButton(x)
 {
  x.innerHTML = '✅ See you, ' + iname;
 }




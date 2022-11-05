const iname =  new URLSearchParams(window.location.search).get('n');
var websiteMode =  new URLSearchParams(window.location.search).get('m');
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
        document.querySelectorAll('.rsvp')[0].innerHTML += (`
        
              <div class="options">
                  <button onclick="hideButton(this)" class='link rsvp' href='' id="" ><i aria-hidden='true' class='fa fa-calendar'></i>&#160;&#160; Saturday, 8 October</button>
                  <button onclick="hideButton(this)" class='link rsvp' href='' id="" ><i aria-hidden='true' class='fa fa-calendar'></i>&#160;&#160; Friday, 14 October</button>
              </div>

                
        `);
        document.querySelectorAll('.whatsappgroup')[0].innerHTML = ("If you fancy joining a WhatsApp group (for photos and stuff) :)");
        document.querySelectorAll('.savedate')[0].innerHTML  = ('📆 14. October 2022')
        document.querySelectorAll('#groupinvite')[0].href  = ('https://chat.whatsapp.com/FM0mmiP8tHTIjwujvYHBnU')
        document.querySelectorAll('#calinvite')[0].href  = ('webcal://calendar.google.com/calendar/ical/0cue9opjntq7h2tnvb1io9e6h0%40group.calendar.google.com/public/basic.ics')
        // document.querySelectorAll('#userNameFull')[0].innerHTML = ('Yay, '+ 'farewell' + '✨')
        document.querySelectorAll('.partytheme')[0].innerHTML += ('<h2> Theme</h2>')
        document.querySelectorAll('.partytheme')[0].innerHTML += ('<p> 👉 The theme is "I went to a kringloop in a bathrobe on a cosy autumn day and I found this..." - thus feel free to combine your outfit with something (aesthetic or not so aesthetic) you found in a thrift store - or just a lazy bathrobe :D</p>')
        break;
    case '10000':
        const linkCal = 'webcal://calendar.google.com/calendar/ical/0cue9opjntq7h2tnvb1io9e6h0%40group.calendar.google.com/public/basic.ics'
        const groupInvite = 'https://chat.whatsapp.com/GVpLyf2d38qLMZDvuvNXPb'
        console.log('farewell!');
        document.querySelectorAll('#links > div > h2:nth-child(2)')[0].innerHTML = ('10.000 days on earth 🌍 woopwoop - SingStar party')
        document.querySelectorAll('.emoji')[0].innerHTML = ('🎈')
        document.querySelectorAll('.invite')[0].innerHTML += ("Dear friend, multiple occations to celebrate: <br> - 1st I'm back in Frankfurt 🌆<br> - 2nd Although my actual birthday is on the 23rd of June, this year there is another special birthday to celebrate: I turned 10.000 days on November 9th");
        document.querySelectorAll('.rsvp h2')[0].innerHTML = ("RSVP");
        // document.querySelectorAll('.whatsappgroup')[0].innerHTML = ("If you fancy joining a WhatsApp group (for photos and stuff) :)");
        document.querySelectorAll('.savedate')[0].innerHTML  = ('📆 19. November 2022')
        document.querySelectorAll('#groupinvite')[0].href  = (groupInvite)
        document.querySelectorAll('#calinvite')[0].href  = (linkCal)
        // document.querySelectorAll('.highlinks .head')[0].innerHTML += (`


        // <div class="tag">SAVE THE DATE 👉</div>
        // <div class="tag cyan savedate"></div>
        // <a class="tag cyan " href='webcal://calendar.google.com/calendar/ical/0cue9opjntq7h2tnvb1io9e6h0%40group.calendar.google.com/public/basic.ics' id="calinvite" ><i aria-hidden='true' class='fa fa-calendar'></i>&#160;&#160; Subscribe   </a>
        // <a class="tag cyan " href='https://chat.whatsapp.com/FM0mmiP8tHTIjwujvYHBnU' id="groupinvite" ><i aria-hidden='true' class='fa fa-whatsapp'></i>&#160;&#160; Join   </a>

        // `);

        document.querySelectorAll('.rsvp .journey')[0].innerHTML += (`
        

        
        <div class="options">
            <button onclick="hideButton(this)" class='link rsvp' href='' id="" ><i aria-hidden='true' class='fa fa-birthday-cake'></i>&#160;&#160; Count me innnn </button>
        </div>

        
  
        `);

        document.querySelectorAll('.rsvp .journey')[0].innerHTML += (`
        
        <a class='link' href='${groupInvite}' id="groupinvite" ><i aria-hidden='true' class='fa fa-whatsapp'></i>&#160;&#160; Join group</a>

        
  
        `);

        // document.querySelectorAll('.partytheme')[0].innerHTML += ('<h2> Theme</h2>')
        // document.querySelectorAll('.partytheme')[0].innerHTML += ('<p> 👉 The theme is "I went to a kringloop in a bathrobe on a cosy autumn day and I found this..." - thus feel free to combine your outfit with something (aesthetic or not so aesthetic) you found in a thrift store - or just a lazy bathrobe :D</p>')
        break;
      case 'bday':
        document.innerHTML = ('Invalid URL')
          // document.querySelectorAll('.invite')[0].innerHTML = ("👋 Hoi friend. You are invited! And since you might be familiar with my spontaneous nature, the unpredicability of Dutch weather and my love for chaotic WhatsApp groups I created this live calendar feed / blocker to subscribe to and stay up to date 🙌 🙂)");
          // document.querySelectorAll('#links > div > h2:nth-child(2)')[0].innerHTML = ("Let's celebrate my 9861th day on earth")
          // console.log('bday!');
      break;
    default:
      // code block
  }


function hideButton(x)
 {
  x.innerHTML = '🎉 Awesome, ' + iname;
 }




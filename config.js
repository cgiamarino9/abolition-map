var config = {
    accessToken: 'pk.eyJ1IjoiY2dpYW1hcmlubyIsImEiOiJjanAyd2hwNWUwYnJ3M3dzMHF4MnJkZ29uIn0.7tLnplw65tLmywvvIPGSKA',
    style: 'mapbox://styles/cgiamarino/ckjuh7l7602yb19lemcmi80wu',
    theme: 'light',
    alignment: 'left',
    toptitle: 'UCLA Cops off Campus Map',
    title: 'UCLA Cops off Campus Tour Map',
    byline: 'UCLA Cops off Campus',
    description: 'In 1969, students of color at UCLA demanded their university confront racial inequity and systemic injustices. This grassroots movement was also taking place on college campuses nationwide at the time. At UCLA, this movement led to the creation of our Ethnic Studies Research Centers, amongst other advances towards confronting racial inequity.</br></br>Now, over 50 years later, students of color at UCLA are continuing to speak out against systemic racism on campus. In particular, there is a growing movement happening nationwide to abolish police from all university campuses. Imagining the UC system without UCPD is not difficult to do, especially since UCPD was only created in 1947, at UC Berkeley, before eventually expanding to other campuses. At UCLA, the Cops Off Campus movement has been inspired by actions of both the COLA (Cost of Living Adjustment) movement led by graduate student workers in 2019 and also the Black Lives Matter movement in 2020.</br></br> At UCLA Cops Off Campus, we believe that one of the first steps towards abolishing UCPD is to map sites of carceral violence on campus. In this mapping, we seek to disallow cycles of carceral violence to continue on campus and we demand accountability from UCLA, in the form of abolition of UCPD and investment in COLA, racial equity, and social services on campus instead of funding the police. In preparing to map sites of carceral violence at UCLA, we encountered two important geopolitical constraints that are noteworthy:  <h5 class="tab">(1) All of UCLA is a site of carceral violence that reproduces punitive, surveillance, and racist frameworks. Each department on campus can be mapped for the ways that it perpetuates the logic of the police state, in manners that have material consequences for Los Angeles and the world. </h5><h5 class="tab">(2) UCLA, as a campus, is not confined to Westwood but is a real estate enterprise that acquires land and buildings throughout Southern California, from UCLA Conference Center in Lake Arrowhead to Harbor-UCLA Medical Center in Carson, and so much more.</h5>',
    footer: 'Story map by Chris Giamarino, PhD student in urban planning at UCLA Luskin. Design inspired by <a href="https://pointsunknown.nyc/" target=”_blank”>Points Unknown</a> from their Mapbox Story Map tutorial.',
    footerAttribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a>',
    chapters: [
        {
            id: 'slide-0',
            alignment: 'left',
            hidden: false,
            title: 'Cops off Campus at UCLA',
            image: './images/protest-1.jpg',
            description: 'The UCLA Abolition Map is a growing catalog that ensures our campus ends its legacy of policing students, who are trying to receive their education, and community. This map will be accompanied by “Walk and Talks” through the UCLA campus with students, staff, and faculty. We will reflect on the carceral actions of UCLA together and continue to build towards a world where we have Cops off Campus.',
            location: {
                center: [-118.57914, 33.94910],
                zoom: 10.09,
                pitch: 0,
                bearing: 0
            },
            //mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'sites',
                     opacity: 1,
                     duration: 5000
                },
                {
                    layer: 'property',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'sites',
                    opacity: 0,
                    duration: 5000
               },
               {
                   layer: 'property',
                   opacity: 0,
                   duration: 5000
               }
            ]
        },
        {
            id: 'slide-1',
            alignment: 'left',
            hidden: false,
            title: 'Angela Davis at Royce Hall, September 19, 1969 - June 20, 1970',
            image: './images/angela.jpg',
            imageCredit: '<a href="https://100.ucla.edu/timeline/angela-davis-lectures-in-royce-hall" target=”_blank” >UCLA 100</a>',
            description: '<a href="https://newsroom.ucla.edu/stories/angela-davis-returns-to-ucla-classroom-45-years-after-controversy" target="_blank">Angela Davis</a>, civil rights activist and abolitionist, was hired as an Assistant Professor of Philosophy at UCLA for the 1969-1970 academic year, and was fired by the UC Board of Regents at the urging of then-Governor <a href="https://oac.cdlib.org/findaid/ark:/13030/c8bz6brj/entire_text/" target="_blank">Ronald Reagan</a> two days after teaching her first class. The basis for her firing were her political beliefs and membership in the American Communist Party. After protests over her firing centering on suppression of academic freedom and a court ruling, Davis resumed teaching, but was fired again in June 1970 for &#8220;<a href="https://archive.nytimes.com/www.nytimes.com/books/98/03/08/home/davis-regents.html" target="_blank">inflammatory language</a>&#8221; in four different speeches. The report written regarding her dismissal stated, &#8220;We deem particularly offensive such utterances as her statement that the [UC] regents &#8216;killed, brutalized (and) murdered&#8217; the People&#8217;s Park demonstrators, and her repeated characterizations of the police as &#8216;pigs.&#8217;&#8221; Currently, UCLA continues to use her story and her image in promotional materials and on social media.',
            location: {
                center: [-118.44295, 34.07288 ],
                zoom: 18.05,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'satellite',
                  opacity: 1,
                  duration: 5000
              },
              {
                  layer: 'label',
                  opacity: 1,
                  duration: 5000
              }
            ],
            onChapterExit: [
              {
                  layer: 'satellite',
                  opacity: 0,
                  duration: 5000
              },
              {
                  layer: 'label',
                  opacity: 0,
                  duration: 5000
              }
            ]
        },
        {
            id: 'slide-2',
            alignment: 'left',
            hidden: false,
            title: 'Janns Steps, May 1970',
            image: './images/janss.jpg',
            imageCredit: '<a href="https://www.change.org/p/ucla-rename-janss-steps-at-ucla" target="_blank">Change.Org</a>',
            description: 'In late April 1970, <a href="https://newsletter.alumni.ucla.edu/connect/2019/dec/ucla-in-the-1970s/default.htm" target="_blank">President Nixon ordered</a> U.S. troops to invade Cambodia. On May 4, students at Kent State College in Ohio, were protesting the Vietnam War and the invasion of Cambodia. The Ohio National Guard fired into the protesters, killing four people and sparking massive protests and student strikes at colleges and universities across the U.S. </br></br>In response, UCLA students held an anti-Vietnam war protest that culminated in a standoff between protesters and police at <a href="https://arcg.is/1TXmqT" target="_blank">Janss Steps</a>, and eventually spanned across several UCLA buildings on campus. It began when students refused an order to disperse from Janss Steps, administrators declared an <a href="https://www.google.com/maps/d/embed?mid=1gBY6XEWJXZ7cxUn2haxXPuWVHJE" target="_blank">illegal assembly</a>, and called in LAPD and CHP. The police used force, <a href="https://newsletter.alumni.ucla.edu/connect/2017/feb/black-history/default.htm#civil" target="_blank">arresting 74 students</a> and injuring another dozen. In response, then-Governor Ronald Reagan shut down all California colleges and universities for four days.',
            location: {
                center: [-118.44375, 34.07210],
                zoom: 17.95,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'satellite',
                  opacity: 1,
                  duration: 5000
              },
              {
                  layer: 'label',
                  opacity: 1,
                  duration: 5000
              }
            ],
            onChapterExit: [
              {
                  layer: 'satellite',
                  opacity: 0,
                  duration: 5000
              },
              {
                  layer: 'label',
                  opacity: 0,
                  duration: 5000
              }
            ]
        },
        {
            id: 'slide-3',
            alignment: 'left',
            hidden: false,
            title: 'Fraternity Row, May 1990',
            image: './images/theta.jfif',
            imageCredit: '<a href="https://www.facebook.com/thetaxi2012/" target="_blank">Theta Xi Facebook</a>',
            description: 'Officer Terence Duren was accused of using his <a href="https://www.latimes.com/archives/la-xpm-2006-nov-21-me-taser21-story.html" target="_blank">nightstick to choke someone</a> who was hanging out on a Saturday in front of a UCLA fraternity. Kente S. Scott alleged that Duren confronted him while he was walking on the street outside the Theta Xi fraternity house. Scott sued the university, and according to court records, UCLA officials moved to have Duren dismissed from the police force. But after an independent administrative hearing, officials overturned the dismissal, suspending him for 90 days.',
            location: {
                center: [-118.45035, 34.06712],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'label',
                  opacity: 1,
                  duration: 5000
              }
            ],
            onChapterExit: [
              {
                  layer: 'label',
                  opacity: 0,
                  duration: 5000
              }
            ]
        },
        {
            id: 'slide-4',
            alignment: 'left',
            hidden: false,
            title: 'UCLA Faculty Center, April 28, 1993',
            image: './images/hunger.jpg',
            imageCredit: '<a href="https://alumni.ucla.edu/ucla-history/ucla-history-26/">Daily Bruin</a>',
            description: '99 students were arrested when protesting budget cuts to the Chicano Studies Program. UCLA pressed charges against the students and enabled an environment where UCPD and LAPD clashed, in riot gear, with their students. Eventually, after facing incarceration by the hands of their university, the students won a right to the departmentalization of Chicano Studies and a learning environment that included their histories.',
            location: {
                center: [-118.44032, 34.07025],
                zoom: 17.54,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'label',
                    opacity: 1,
                    duration: 5000
                }
              ],
              onChapterExit: [
                {
                    layer: 'satellite',
                    opacity: 0,
                    duration: 5000
                },
                {
                    layer: 'label',
                    opacity: 0,
                    duration: 5000
                }
              ]
        },
        {
            id: 'slide-5',
            alignment: 'left',
            hidden: false,
            title: 'Weyburn Ave & Gayley Ave in Westwood, April 3 1995',
            image: './images/1995.jfif',
            imageCredit: '<a href="https://www.latimes.com/archives/la-xpm-1995-04-04-me-50631-story.html">LA Times</a>',
            description: 'One day after UCLA Basketball National Championship victory <a href="https://www.latimes.com/sports/ucla/story/2020-04-06/wild-westwood-police-had-to-restrain-raucous-ucla-victory-celebration-in-1995" target="_blank">celebration</a> and <a href="https://dailybruin.com/1995/04/04/students-question-polices-use" target="_blank">melee</a> in Westwood,many Bruins questioned the tactics of the Los Angeles Police Dept. in quelling the celebration. Several students who were hit by police batons or rubber bullets criticized the LAPD for its use of force, saying that it did more to ignite conflict than stop it. In an interview yesterday, LAPD officials confirmed 15 official arrests…  &#8220;[and] More than 20 persons were treated at the UCLA Medical Center Emergency Room.&#8221; The head of UCLA’s campus police [Chief Clarence Chapman] agreed with [Commander Tim McBride, spokesman for the LAPD], saying the riots proved to police that early forceful responses are good.',
            location: {
                center: [-118.44823, 34.06199],
                zoom: 19.54,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 0,
                    duration: 5000
                },
                {
                    layer: 'label',
                    opacity: 1,
                    duration: 5000
                }
              ],
              onChapterExit: [
                {
                    layer: 'satellite',
                    opacity: 0,
                    duration: 5000
                },
                {
                    layer: 'label',
                    opacity: 0,
                    duration: 5000
                }
              ]
        },
        {
            id: 'slide-6',
            alignment: 'left',
            hidden: false,
            title: 'Kerckhoff Hall, October 2003',
            image: './images/kerck.jpg',
            imageCredit: '<a href="https://asucla.ucla.edu/kerckhoff-hall-and-patio-2/">ASUCLA</a>',
            description: '<a href="https://www.latimes.com/archives/la-xpm-2006-nov-21-me-taser21-story.html" target="_blank">Officer Terence Duren</a> shot Willie Davis Frazier Jr. in the bathroom of the downstairs study lounge in Kerckhoff Hall in 2003. Frazier said he had been writing a letter in the study lounge for close to an hour and a half before he was confronted by Duren. He said the officer approached him and asked if he was a student. Frazier said he responded, <a href="https://dailybruin.com/2004/01/27/accounts-of-october-shooting-d" target="_blank">&#8220;I’m leaving,&#8210;</a> and got up to leave. That was when Frazier said the physical confrontation began and Duren began beating him on his legs. The confrontation continued and Frazier said he was able to escape and ran to a nearby bathroom. Frazier said Duren followed him into the bathroom and that was where he was shot. The homeless man, Willie Davis Frazier, was later convicted of assaulting an officer.',
            location: {
                center: [-118.44406, 34.07048 ],
                zoom: 18.36,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'label',
                    opacity: 1,
                    duration: 5000
                }
              ],
              onChapterExit: [
                {
                    layer: 'satellite',
                    opacity: 0,
                    duration: 5000
                },
                {
                    layer: 'label',
                    opacity: 0,
                    duration: 5000
                }
              ]
        },
        {
            id: 'slide-7',
            alignment: 'left',
            hidden: false,
            title: 'UCLA Taser Incident, Powell Library, November 14, 2006',
            image: './images/tase.jpg',
            imageCredit: '<a href="https://laist.com/2009/05/18/ucla_taser_incident_lawsuit_settled.php">Henry David, LAist</a>',
            description: '<a href="https://latimesblogs.latimes.com/lanow/2009/05/ucla-settles-lawsuit-with-tasered-student.html" target="_blank">Mostafa Tabatabainejad</a>, a fourth-year undergraduate student, was <a href="https://www.youtube.com/watch?app=desktop&v=4JGlvEcPmug&ab_channel=turbanhead" target="_blank">tazed (trigger warning)</a> five times with a Taser by UCPD while handcuffed. Tabatabainejad was studying for finals in the library around 11:30 PM and was asked to show his ID by a community service officer. He refused to do so, believing that he had been asked to show his ID because of his Middle Eastern ethnicity. The community service officer called UCPD. When UCPD arrived, Tabatabainejad started to leave the library, but an officer grabbed his arm and he was handcuffed. The police then tasered him, continuing to do so even though he was handcuffed and had gone limp. After the incident, UCPD arrested and cited him for “resisting and obstructing a police officer.” UCPD claimed it was necessary to use the Taser because Tabatabainejad “encouraged other students to join his resistance.” Tabatabainejad filed a federal lawsuit alleging that the officers used excessive force and violated the ADA, which was settled with UCLA agreeing to pay </a href="https://laist.com/2009/05/18/ucla_taser_incident_lawsuit_settled.php" target="_blank">$220,000</a>.',
            location: {
                center: [-118.44286, 34.07159],
                zoom: 18.36,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'label',
                    opacity: 1,
                    duration: 5000
                }
              ],
              onChapterExit: [
                {
                    layer: 'satellite',
                    opacity: 0,
                    duration: 5000
                },
                {
                    layer: 'label',
                    opacity: 0,
                    duration: 5000
                }
              ]
        },
        {
            id: 'slide-8',
            alignment: 'left',
            hidden: false,
            title: 'Chancellor Hall',
            image: './images/chance.jpg',
            imageCredit: '<a href="https://blog.admissions.ucla.edu/2012/06/22/chancellors-residence/">UCLA Bruin Blog</a>',
            description: 'UCLA&#8216;s Chancellors have historically colluded with federal law enforcement agencies to surveil, investigate, and share information about UCLA students, faculty, and staff.</br><br><a href="https://www.aau.edu/sites/default/files/AAU-Files/Key-Issues/Science-Security/Letter-FBI-NSHEAB.pdf" target="_blank">The National Security Higher Education Advisory Board (NSHEAB)</a> was created in <a href="https://archives.fbi.gov/archives/news/pressrel/press-releases/fbi-appoints-national-security-higher-education-advisory-board" target="_blank">2005 by FBI Director Robert S. Mueller III</a>, and chancellors from UCLA, UC San Diego, and UC Davis sat on the Board. The purpose of the NSHEAB was stated to be &#8220;a forum for discussion of national security issues,&#8221; including participation not only by the FBI and higher educational institutions, but the CIA, the NSA, DHS, the Office of National Intelligence, the DoD, CBP, and ICE. During the NSHEAB&#8216;s heyday, at least some of the Board&#8216;s work included investigating and developing protocols around foreign espionage and interference with university research, which appears to have included two-way information sharing and investigation of international and undocumented students. The NSHEAB was disbanded in 2018, but a joint resolution, the Homeland Security Higher Education Advisory Council Act, was introduced by <a href="https://www.congress.gov/bill/116th-congress/house-bill/6588/text?r=7&s=1" target="_blank">Congress in 2020</a>. Its text proposes a similarly structured Council as the NSHEAB, with similar functions and purpose.</br></br>In addition to NSHEAB, and under the guise of post-9/11 antiterrorism, the FBI formed a &#8220;campus liaison initiative&#8221; at every field office under its <a href="https://archives.fbi.gov/archives/news/stories/2009/august/campussecurity_080409" target="_blank">Joint Terrorism Task Force</a> to counter groups like &#8220;anarchist extremists,&#8221; &#8220;black separatists,&#8221; &#8220;abortion activists,&#8221; and ALF/ELF, as well as to provide trainings for campus administrators and police. Both presumably existed to facilitate the flow of information on specific threats upstream and of coordinated response techniques downstream.',
            location: {
                center: [-118.44469, 34.06666],
                zoom: 17.98,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [],
              onChapterExit: []
        },
        {
            id: 'slide-9',
            alignment: 'left',
            hidden: false,
            title: 'Murphy Hall, Administrative Vice Chancellor Office',
            image: './images/face.png',
            imageCredit: '<a href="https://fightfortheftr.medium.com/backlash-forces-ucla-to-abandon-plans-for-facial-recognition-surveillance-on-campus-ebe005e3f715" target="_blank">Fight for the Future</a>',
            description: 'UCLA&#8216;s Administrative Vice Chancellor is responsible for developing policy, monitoring compliance, and overseeing campus operations in different departments, including UCPD, IT Services, and Financial and Organizational Services. Both the creation of policies and their enforcement relies on discretionary application and carceral logic, as two examples below show.</br></br>UCLA administrators sent National Students for Justice in Palestine a cease-and-desist letter Oct. 31 regarding the use of a logo to promote the group&#8216;s upcoming national conference, which will be held at UCLA from Friday through Sunday. The logo featured the name &#8220;UCLA,&#8221; a bear and a kite. <a href="https://dailybruin.com/2018/11/15/ucla-faces-controversy-for-trademark-claim-against-nsjp-conference-logo" target="_blank">Administrative Vice Chancellor Michael Beck</a> said the university reserved its right to cancel the event if the situation was not remedied. This instruction was enforced by UCLA Policy 110 (which governs the use of UCLA logos and colors, etc.) against NJSP and SJP at UCLA, even though they, as many other organizations have used UCLA&#8216;s logo without any citations prior to this event. Coincidentally, a new policy enforcing the students to request permission and approval to use any trademark or logo of UCLA passed on Nov. 9. There was no proper notification or prompting to NJSP and SJP to go through such a process before this incident.</br></br>At the beginning of 2020, the Vice Chancellor&#8216;s Office issued a revision to Policy 133, which governs the university&#8216;s use and management of <a href="https://dailybruin.com/2020/01/31/students-share-concerns-about-facial-recognition-on-campus-security-cameras" target="_blank">security systems</a>. The revision proposed the implementation of facial recognition technology on UCLA’s campus, which at the time, made UCLA the first and only university in the country to use facial recognition technology in this manner. This biometric surveillance technology would have been used with the school&#8216;s CCTV cameras, constantly scanning the faces of people on campus and checking them against a database. Students at UCLA organized with <a href="https://fightfortheftr.medium.com/backlash-forces-ucla-to-abandon-plans-for-facial-recognition-surveillance-on-campus-ebe005e3f715" target="_blank">Fight For the Future</a>, a digital privacy advocacy group, against Policy 110&#8216;s revision. After student and community backlash culminating in a national day of action, which was scheduled for March 2, 2020, the Administrative Chancellor, Michael Beck, issued a letter on February 18 stating that UCLA would no longer pursue the use of facial recognition software technology on campus.',
            location: {
                center: [-118.44469, 34.06666],
                zoom: 17.98,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [],
              onChapterExit: []
        },
        {
            id: 'slide-10',
            alignment: 'left',
            hidden: false,
            title: 'Fielding School of Public Health with the Department of Homeland Security',
            image: './images/dhs.jpg',
            imageCredit: '<a href="https://advocacy.ucla.edu/homeland-security-helps-unveil-institute-to-address-school-violence/" target="_blank">Jonathan Van Dyke</a>',
            description: 'The new part of the UCLA Fielding School of Public Health, National Education Safety and Security Institute (NESSI), will be one of the first of its kind in the country. Department of Homeland Security Assistant Secretary James Dinneen visited UCLA for the official unveiling of NESSI. NESSI’s founder and now senior advisor, Frank Quiambao, said he began to envision the institute in 2010 when he realized that &#8220;<a href="https://advocacy.ucla.edu/homeland-security-helps-unveil-institute-to-address-school-violence/" target="_blank">a lot of these &#91;mass shooting&#93; threats … had to do with educational institutions.</a>&#8221; We were well prepared for something like an earthquake or fire, he said, but &#8220;not so when it comes to school violence.&#8221; Aside from school shootings, NESSI will also focus on natural disasters, terrorist attacks and cyber-attacks. This program offers courses such as &#8220;The Surveillance Detection Course &#91;which&#93; instructs participants on the fundamental principles and methodologies of human surveillance&#8221;.',
            location: {
                center: [-118.44469, 34.06666 ],
                zoom: 17.98,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [{
                  layer: 'satellite',
                  opacity: 1,
                  duration: 5000
              },
              {
                  layer: 'label',
                  opacity: 1,
                  duration: 5000
              }
            ],
            onChapterExit: [
              {
                  layer: 'satellite',
                  opacity: 0,
                  duration: 0
              },
              {
                  layer: 'label',
                  opacity: 0,
                  duration: 0
              }
            ]
        },
        {
            id: 'slide-11',
            alignment: 'left',
            hidden: false,
            title: 'The Memory Project memorializes Black Panthers killed in Campbell Hall',
            image: './images/panther.jpg',
            imageCredit: '<a href="https://dailybruin.com/2010/05/25/memory-project-memorializes-remembers-black-panthe" target="_blank">Daily Bruin</a>',
            description: 'Insert description.',
            location: {
                center: [-118.44171,34.07387],
                zoom: 18.87,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [{
                  layer: 'satellite',
                  opacity: 1,
                  duration: 5000
              },
              {
                  layer: 'label',
                  opacity: 1,
                  duration: 5000
              }
            ],
            onChapterExit: [
              {
                  layer: 'satellite',
                  opacity: 0,
                  duration: 5000
              },
              {
                  layer: 'label',
                  opacity: 0,
                  duration: 5000
              }
            ]
        },
        {
            id: 'slide-12',
            alignment: 'left',
            hidden: false,
            title: 'Gayley Avenue near Whole Foods Market, November 2013',
            image: './images/ucpd.jpg',
            imageCredit: '<a href="https://www.police.ucla.edu/" target="_blank">UCPD</a>',
            description: 'Judge David S. Cunningham III, a former president of the Los Angeles Police Commision, was pulled over by two UCPD officers just after 10 a.m. on Gayley Avenue near <a href="https://dailybruin.com/2013/11/25/la-judge-files-excessive-force-complaint-against-ucpd" target="_blank">Whole Foods Market</a>, after leaving the parking lot of LA Fitness in Westwood. He was pulled over for not wearing a seatbelt and was handcuffed for &#8220;resisting arrest&#8221; and was shoved into the back of the police car. UCPD were found to have used racially-motivated excessive force, and Cunningham won a <a href="https://dailybruin.com/2014/07/11/la-judge-uc-reach-settlement-over-10m-damages-claim-against-ucpd" target="_blank">$500,000 settlement</a>. ',
            location: {
                center: [-118.44749, 34.06118 ],
                zoom: 18.58,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-13',
            alignment: 'left',
            hidden: false,
            title: 'Strathmore Drive and Levering Avenue, August 27, 2014',
            image: './images/claudius.jpg',
            imageCredit: '<a href="https://dailybruin.com/2016/05/25/ucla-employee-files-lawsuit-alleging-ucpd-racially-profiled-him" target="_blank">Carl Douglas</a>',
            description: 'Claudius Gaines, a UCLA Facilities Management worker, alleged a UCPD officer assaulted and falsely imprisoned him during a traffic stop in the North Village in <a href="https://dailybruin.com/2016/05/25/ucla-employee-files-lawsuit-alleging-ucpd-racially-profiled-him" target="_blank">2014</a> because he is Black. According to the police, he was pulled over for a broken license plate light and for using his phone, however Claudius reported that this was false information because his license plate was recently repaired after a similar stop mere weeks before. When Gaines asserted this, and remained in his car without producing the paperwork police demanded from him, police escalated the situation through <a href="https://dailybruin.com/2014/09/08/editorial-ucpd-must-recognize-racial-profiling-issue" target="_blank">use of force</a> and the threat of pepper spray. Gaines was arrested for obstruction of a police officer and resisting arrest, and subsequently filed a <a href="https://www.latimes.com/local/lanow/la-me-ln-black-ucla-employee-alleges-racial-profiling-in-arrest-by-campus-police-20140902-story.html" target="_blank">racial profiling lawsuit</a> against the UCPD.',
            location: {
                center: [-118.45105, 34.06556 ],
                zoom: 18.58,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [
                {
                    layer: 'label',
                    opacity: 1,
                    duration: 5000
                }
              ],
            onChapterExit: [
              {
                  layer: 'label',
                  opacity: 0,
                  duration: 5000
              }
            ]
        },
        {
            id: 'slide-14',
            alignment: 'left',
            hidden: false,
            title: 'UCLA Dorms',
            image: './images/cso.jfif',
            imageCredit: '<a href="https://www.linkedin.com/company/cso-programs-ucla/" target="_blank">CSO LinkedIn</a>',
            description: 'The CSO programs are a primary outlet for students to be the &#8220;<a href="https://www.police.ucla.edu/cso/about-cso" target="_blank">eyes and ears</a>&#8221; of UCPD and provide a visible deterrent to crime. The CSOs patrol or are stationed in designated campus buildings or off-campus locations (Sunset Blvd to North, Hilgard to east, Wilshire to the south, and Veterans to the west, library buildings, residence halls, parking lots and campus buildings). They communicate and monitor with a two-way radio between Police Officers and other units. This is problematic for students who may be racially targeted or profiled.',
            location: {
                center: [-118.43995, 34.07449],
                zoom: 17.67,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-15',
            alignment: 'left',
            hidden: false,
            title: 'Luskin School of Public Affairs, March 2020',
            image: './images/jorja.jpg',
            imageCredit: '<a href="https://dailybruin.com/2010/05/25/memory-project-memorializes-remembers-black-panthe" target="_blank">UCLA Optimism</a>',
            description: '<a href="https://luskin.ucla.edu/ucla-study-finds-strong-support-for-lapds-community-policing-program" target="_blank">Principal Investigator Jorja Leap</a> (in collaboration with co-authors from the Luskin School of Social Welfare, Department of Anthropology and other UCLA data managers and researchers) released a report entitled &#8220;Evaluation of the LAPD Community Safety Partnership.&#8221; As is common in &#8220;reform&#8221; research, the report offered a positive evaluation of CSP programs and recommended more money to the LAPD (not, notably, more money to the impoverished communities they are policing.) This high profile report was immediately used by LA Mayor Eric Garcetti to justify many more millions of dollars directed toward the LAPD during the Summer of 2020 when a massive uprising for Black life was calling for precisely the opposite: defunding and divesting from policing, and investing in Black communities.',
            location: {
                center: [-118.43995, 34.07449],
                zoom: 17.81,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [{
                  layer: 'satellite',
                  opacity: 1,
                  duration: 5000
              },
              {
                  layer: 'label',
                  opacity: 1,
                  duration: 5000
              }
            ],
            onChapterExit: [
              {
                  layer: 'satellite',
                  opacity: 0,
                  duration: 5000
              },
              {
                  layer: 'label',
                  opacity: 0,
                  duration: 5000
              }
            ]
        },
        {
            id: 'slide-16',
            alignment: 'left',
            hidden: false,
            title: 'Haines Hall, Department of Anthropology',
            image: './images/spy.jpg',
            imageCredit: '<a href="https://twitter.com/stoplapdspying/status/1191880674178822144" target="_blank">Stop LAPD Spying</a>',
            description: 'UCLA Professor of Anthropology Jeffrey Brantingham is the co-founder of for profit company PredPol, short for <a href="https://stoplapdspying.medium.com/the-algorithmic-ecology-an-abolitionist-tool-for-organizing-against-algorithms-14fcbd0e64d0" target="_blank">predictive policing</a>. PredPol uses historical crime data (known to be deeply deeply racially biased) to predict future crime and inform policing. This technology automates and reproduces long histories of racial capitalism and the racist policing it produces, using the prestige of UCLA for cover. PredPol grew out of a research project between the Los Angeles Police Department and UCLA, and Professor Brantingham is far from alone in direct research collaboration and support with the LAPD, the US military, and other arms of state and private violence around the country.',
            location: {
                center: [-118.46067, 34.05942],
                zoom: 18.58,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-17',
            alignment: 'left',
            hidden: false,
            title: 'Jackie Robinson Stadium, June 1, 2020',
            image: './images/jackie.jfif',
            imageCredit: '<a href="https://www.latimes.com/california/story/2020-06-04/ucla-chancellor-calls-lapd-use-of-jackie-robinson-stadium-to-process-arrests-a-violation" target="_blank">Kent Nishimura</a>',
            description: 'In the midst of Black Lives Matter Protests (after the murder of George Floyd, Breonna Taylor, and countless other Black people by the police) LAPD used the UCLA’s Jackie Robinson Stadium as a &#8220;field jail&#8221; to detain protesters and others arrested for curfew violations, including UCLA students. All social distancing protocols during the Covid-19 pandemic were violated by the LA County Sheriff’s Department and LAPD  with  protesters  deliberately  crowded  into  buses   and  officers  not   following  rules   and recommendations, including wearing masks. Protesters were held on these buses at UCLA for five to six hours, without access to restrooms, food, water, information, or medical attention.',
            location: {
                center: [-118.46067, 34.05942],
                zoom: 17.22,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [{
                  layer: 'satellite',
                  opacity: 1,
                  duration: 5000
              },
              {
                  layer: 'label',
                  opacity: 1,
                  duration: 5000
              }
            ],
            onChapterExit: [
              {
                  layer: 'satellite',
                  opacity: 0,
                  duration: 5000
              },
              {
                  layer: 'label',
                  opacity: 0,
                  duration: 5000
              }
            ]
        },
        {
            id: 'slide-18',
            alignment: 'left',
            hidden: false,
            title: 'UCLA-Harbor Hospital, October 6, 2020',
            image: './images/harbor.jpg',
            imageCredit: '<a href="https://www.kmdarchitects.com/harbor-ucla" target="_blank">kmd</a>',
            description: 'A patient experiencing a psychiatric crisis was shot seven times and killed by a Los Angeles County Sheriff&#8217;s Department deputy. Subsequently, healthcare workers protested against police violence in hospitals.',
            location: {
                center: [-118.29936, 33.83028],
                zoom: 15.06,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [
                {
                  layer:'property',
                  opacity:.7,
                  duration:5000
                }
              ],
            onChapterExit: [
              {
                layer:'property',
                opacity:0,
                duration:5000
              }
            ]
        },
        {
            id: 'slide-19',
            alignment: 'left',
            hidden: false,
            title: 'UCLA Law',
            image: './images/law.png',
            imageCredit: '<a href=https://dailybruin.com/2020/07/17/ucla-school-of-law-holds-contracts-with-companies-selling-personal-data-to-ice" target="_blank">Daily Bruin</a>',
            description: 'UCLA Law Students <a href="https://www.promisehumanrights.blog/blog/2020/5/ucla-law-students-demand-westlaw-and-lexisnexis-parent-companies-divest-from-ice" target="_blank">Demand</a> Westlaw and LexisNexis&#8217; Parent Companies Divest from ICE. Thomson Reuters (Westlaw&#8217;s parent company) and RELX Group (LexisNexis&#8217; parent company are data brokers who can sell and buy personal data for profit. This makes them important business partners for ICE, which uses the data to pursue arrests and deportations. UCLA Law chapter of Law Students against ICE began in Jan 2020, where these students came together to advocate for change to UCLA Law&#8217;s relationship with Westlaw and LexisNexis and their ties to ICE. UCLaw has paid $339,239 to Westlaw since 2015 and $248,490 to LexisNexis.',
            location: {
                center: [-118.44571, 34.06731  ],
                zoom: 19,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-20',
            alignment: 'left',
            hidden: false,
            title: 'UCPD',
            image: './images/march.jpg',
            imageCredit: '<a href="https://dailybruin.com/2020/10/01/protesters-march-down-westwood-boulevard-call-for-removal-of-police-from-campuses" target="_blank">Naveed Pour</a>',
            description: '<a href="https://www.police.ucla.edu/other/violent-crime-behavioral-analysis-seminar" target="_blank">UCLA UCPD</a> alone has a projected budget for Fiscal Year 20-21 of $22,182,739.00. Despite <a href="https://youtu.be/o2VCO-jbPKw" target="_blank">continued protests</a>, this budget continues to expand year after year, while funding to Ethnic Studies and cultural programming faces continued cuts. This police budget includes hundreds of thousands of dollars for firearms, ammunition, and tasers. From July 2016 to May 2016, 30% of arrests made by UCPD at UCLA were of Black people, and 21% were non-Black Latinx people. Yet, the demographic of Westwood data shows that 2% of the Westwood population is Black and 7% non-Black Latinxs. Students and communities of color do not feel safe and are hyper-policed while at UCLA.',
            location: {
                center: [-118.44571, 34.06731 ],
                zoom: 19,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [{
                  layer: 'satellite',
                  opacity: 1,
                  duration: 5000
              },
              {
                  layer: 'label',
                  opacity: 1,
                  duration: 5000
              }
            ],
            onChapterExit: [
              {
                  layer: 'satellite',
                  opacity: 0,
                  duration: 5000
              },
              {
                  layer: 'label',
                  opacity: 0,
                  duration: 5000
              }
            ]
        },
        {
            id: 'slide-21',
            alignment: 'left',
            hidden: false,
            title: 'Drake Stadium, Summer 2028',
            image: './images/pauley.jpg',
            imageCredit: '<a href="https://dailybruin.com/2017/09/13/la-to-host-2028-summer-olympics-athletes-to-use-ucla-facilities" target="_blank">Daily Bruin</a>',
            description: 'The 2028 Summer Olympics will be hosted by the City of Los Angeles. UCLA will play a <a href="https://dailybruin.com/2017/09/13/la-to-host-2028-summer-olympics-athletes-to-use-ucla-facilities" target="_blank">prominent role</a> in the Games, as Olympic athletes and support personnel will live in the Olympic Village on the Hill and train at Drake Stadium; some medal events will be held in Pauley Pavilion; and athletes will use the Ronald Reagan UCLA Medical Center and the Harbor-UCLA Medical Center in Torrance, California for medical services. The Games have been designated a <a href="https://nolympicsla.com/2020/01/22/what-is-a-national-special-security-event-nsse/" target="_blank">National Special Security Event (NSSE)</a>, which designates local law enforcement to work closely with the Department of Homeland Security, ICE, CBP, and other federal law enforcement agencies, likely for years and months before and during the event. The NSSE will give more power to both federal and local law enforcement agencies to surveil, intimidate, sweep, and incarcerate marginalized groups and communities of color in Los Angeles. Historically, after the last Olympic Games in Los Angeles (1984), Los Angeles saw increases in arrests in communities of color and the <a href="https://sundial.csun.edu/160552/news/activists-say-the-2028-olympics-could-cause-police-militarization-and-increase-disparity-in-l-a-s-low-income-neighborhoods/" target="_blank">militarization of local police</a>. Through its participation in the Olympics, UCLA is complicit in furthering surveillance tactics, over-policing, and police militarization of the surrounding Los Angeles community, not to mention UCLA students, faculty, and staff.',
            location: {
                center: [-118.44966, 34.07197],
                zoom: 17.24,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [{
                  layer: 'satellite',
                  opacity: 1,
                  duration: 5000
              },
              {
                  layer: 'label',
                  opacity: 1,
                  duration: 5000
              }
            ],
            onChapterExit: [
              {
                  layer: 'satellite',
                  opacity: 0,
                  duration: 5000
              },
              {
                  layer: 'label',
                  opacity: 0,
                  duration: 5000
              }
            ]
        },
        {
            id: 'slide-22',
            alignment: 'left',
            hidden: false,
            title: 'UCLA Cops off Campus Map',
            image: './images/bg-2.jpg',
            imageCredit:'',
            description: 'The UCLA Abolition Map is a growing catalog that ensures our campus ends its legacy of policing students, who are trying to receive their education, and community. This map will be accompanied by “Walk and Talks” through the UCLA campus with students, staff, and faculty. We will reflect on the carceral actions of UCLA together and continue to build towards a world where we have Cops off Campus.',
            location: {
                center: [-118.45228, 34.07091],
                zoom: 14.24,
                pitch: 0,
                bearing: 0
            },
            //mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'sites',
                     opacity: 1,
                     duration: 5000
                },
                {
                    layer: 'property',
                    opacity: .6,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'sites',
                    opacity: 0,
                    duration: 5000
               },
               {
                   layer: 'property',
                   opacity: 0,
                   duration: 5000
               }
            ]
        }
    ]
};

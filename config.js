var config = {
    accessToken: 'pk.eyJ1IjoiY2dpYW1hcmlubyIsImEiOiJjanAyd2hwNWUwYnJ3M3dzMHF4MnJkZ29uIn0.7tLnplw65tLmywvvIPGSKA',
    style: 'mapbox://styles/cgiamarino/ckiknqpaj0yqp18o3e91fbwnm',
    theme: 'light',
    alignment: 'left',
    toptitle: 'UCLA Cops off Campus',
    title: 'UCLA Cops off Campus',
    byline: 'By Chris Giamarino',
    description: 'In 1969, students of color at UCLA demanded their university confront racial inequity and systemic injustices. This grassroots movement was also taking place on college campuses nationwide at the time. At UCLA, this movement led to the creation of our Ethnic Studies Research Centers, amongst other advances towards confronting racial inequity.</br></br>Now, over 50 years later, students of color at UCLA are continuing to speak out against systemic racism on campus. In particular, there is a growing movement happening nationwide to abolish police from all university campuses. Imagining the UC system without UCPD is not difficult to do, especially since UCPD was only created in 1947, at UC Berkeley, before eventually expanding to other campuses. At UCLA, the Cops Off Campus movement has been inspired by actions of both the COLA (Cost of Living Adjustment) movement led by graduate student workers in 2019 and also the Black Lives Matter movement in 2020.</br></br> At UCLA Cops Off Campus, we believe that one of the first steps towards abolishing UCPD is to map sites of carceral violence on campus. In this mapping, we seek to disallow cycles of carceral violence to continue on campus and we demand accountability from UCLA, in the form of abolition of UCPD and investment in COLA, racial equity, and social services on campus instead of funding the police. In preparing to map sites of carceral violence at UCLA, we encountered two important geopolitical constraints that are noteworthy:  <h5 class="tab">(1) All of UCLA is a site of carceral violence that reproduces punitive, surveillance, and racist frameworks. Each department on campus can be mapped for the ways that it perpetuates the logic of the police state, in manners that have material consequences for Los Angeles and the world. </h5><h5 class="tab">(2) UCLA, as a campus, is not confined to Westwood but is a real estate enterprise that acquires land and buildings throughout Southern California, from UCLA Conference Center in Lake Arrowhead to Harbor-UCLA Medical Center in Carson, and so much more.</h5>The UCLA Abolition Map is a growing catalog that ensures our campus ends its legacy of policing students, who are trying to receive their education, and community. This map will be accompanied by “Walk and Talks” through the UCLA campus with students, staff, and faculty. We will reflect on the carceral actions of UCLA together and continue to build towards a world where we have Cops off Campus.',
    footer: 'Two acknowledgments are necessary. First, thank you to Grga Basic, Marguerite Holloway, Michael Krisch, and Juan Francisco Saldarriaga at <a href="https://pointsunknown.nyc/" target=”_blank”>Points Unknown</a> for their Mapbox Story Map tutorial. Second, thank you to <a href="https://www.getbounds.com/" target=”_blank”>Malcolm Meyer</a> for their technical assistance with coding issues.',
    footerAttribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a>',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-118.45950, 34.07066],
                zoom: 13.78,
                pitch: 0,
                bearing: 0
            },
            //mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'try',
            alignment: 'left',
            hidden: false,
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'jfjsdksjfdslfjsl',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'woo',
            alignment: 'left',
            hidden: false,
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'huh',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};

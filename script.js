function sendEmail() {
   

    var templateParams = {
        from_name: document.getElementById('name').value,
        email_id: document.getElementById('Email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    emailjs.send(service_4705tnt, template_2u1890b, templateParams)
        .then(function(response) {
         alert("Success!" + response.status);
        })
}
var navLinks=document.getElementById("navLinks");
        function showMenu(){
            /*navLinks.style.right="0";*/      
            navLinks.style.display="block";
        }
        function hideMenu(){
            /*navLinks.style.right="-200px";*/
            navLinks.style.display="none";
        }
const uibtn = document.querySelector('.btn-hover-ui');
const pybtn = document.querySelector('.btn-hover-py');
const pdbtn = document.querySelector('.btn-hover-pd');

const linkToui = 'https://trainings.internshala.com/ui-ux-placement-guarantee-course/?utm_source=Google-Search&utm_campaign=INT-Search-Exact-STT-Non-Brand-UI-UX-PGC-Aug24&utm_adgroup=Course&utm_locationinterest=&utm_searchkeyword=ui%20and%20ux%20course&utm_keywordid=kwd-823735660294&gad_source=1&gclid=Cj0KCQiA0--6BhCBARIsADYqyL8J5fKShRMW5Hw3HMfz0HN4HaEn14OryAlBd4vUteyKftxa0OT-cnkaAlWPEALw_wcB';
const linkTopy = 'https://www.udemy.com/topic/python/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Brand-Topic_la.EN_cc.India&campaigntype=Search&portfolio=BrandTopic&language=EN&product=Course&test=&audience=Keyword&topic=&priority=&utm_content=deal4584&utm_term=_._ag_139989572110_._ad_719478367800_._kw_udemy%20python_._de_m_._dm__._pl__._ti_kwd-317120314556_._li_9062152_._pd__._&matchtype=b&gad_source=1&gclid=Cj0KCQiA0--6BhCBARIsADYqyL-P4lIg2CW8To_zZdnlL3JXCuG9Vrqq17-lobXm1AN_o0kxXGP5vBwaAiCFEALw_wcB';
const linkTopd = 'https://www.coursera.org/courses?query=product%20design';




uibtn.addEventListener('click', function() {
    uibtn.focus();
    window.location.href = linkToui;
});
pybtn.addEventListener('click', function() {
    pybtn.focus();
    window.location.href = linkTopy;
});
pdbtn.addEventListener('click', function() {
    pdbtn.focus();
    window.location.href = linkTopd;
});


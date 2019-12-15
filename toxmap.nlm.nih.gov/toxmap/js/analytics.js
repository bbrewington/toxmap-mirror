// Universal [Google] Analytics code
// The "functional" analytics.js file only used on the production server.
// All other machines have a dummy, null implementation version of analytics.js.  
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-16235265-13', 'nih.gov'); // toxmap.nlm.nih.gov
ga('send', 'pageview');
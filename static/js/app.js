var STAGE = STAGE || {};

(function() {
    
    var headerInNavbar = false;
    
    var controller = {
        init: function(){
            
            router.init();
            sections.init();
            
//            window.addEventListener('scroll', function() 
//            {
//                if(document.body.scrollTop > 100 && headerInNavbar === false) {
//                    document.querySelector('.navigation').innerHTML = "Movie Awesomeness!"
//                    headerInNavbar = true;
//                }
//                else if (document.body.scrollTop < 100 && headerInNavbar === true)
//                {
//                    document.querySelector('.navigation').innerHTML = ""
//                    headerInNavbar = false;
//                }
//            }, false);
        }
    };
    
    var router = {
        
        init: function () {
            routie({
                'about': function() {
                    document.getElementById('about').classList.remove('hidden');
                    document.getElementById('movies').classList.add('hidden');
                },
                'movies': function() {
                    document.getElementById('movies').classList.remove('hidden');
                    document.getElementById('about').classList.add('hidden');
                }
            });
        }
    }

    
    var sections = {
        init: function(){
            sections.about();
            sections.movies();
        },
        
        about: function(){
            var objectToFill = document.getElementById('about');
            var aboutFill = content.about;
            Transparency.render(objectToFill, aboutFill);
        },
        
        movies: function(){
            var objectToFill = document.getElementById('movies');
            var moviedata = content.movies;
            var directives = {
				thumb: {
					src: function(){
                        return this.thumb}
				}
			};
            
            Transparency.render(objectToFill, content.movies, directives);
            
            var movieList = document.querySelectorAll('wop');
            utils.highlightSelection(movieList);
        }
    };
    
    var content = {
        
        about: 
        {
            movieTitle: "Hierbij mijn meest favoriete films ever",
            description: "Bacon ipsum dolor sit amet drumstick tail pork ham hock kevin short ribs, frankfurter tongue sausage. Tongue tenderloin boudin, pork doner swine pig tail. Rump strip steak bresaola capicola short ribs jowl beef ribs t-bone boudin shoulder ground round. Short loin shoulder ham hock tenderloin. Prosciutto corned beef pig kielbasa ribeye rump pork chop capicola pastrami cow. Doner swine salami pork loin andouille ham pastrami."
        },
        
        movies: 
        [
            {
                movieTitle:"Braveheart", 
                releaseDate:"1995", 
                movieDescription:"When his secret bride is executed for assaulting an English soldier who tried to rape her, a commoner begins a revolt and leads Scottish warriors against the cruel English tyrant who rules Scotland with an iron fist.",
                thumb:"static/images/braveheart.jpg"
            },
            {
                movieTitle:"Lord of the Rings", 
                releaseDate:"2001", 
                movieDescription:"A meek hobbit of The Shire and eight companions set out on a journey to Mount Doom to destroy the One Ring and the dark lord Sauron.",
                thumb:"static/images/lotr.jpg"
            },
            {
                movieTitle:"LEGO: the movie", 
                releaseDate:"2014", 
                movieDescription:"An ordinary LEGO minifigure, mistakenly thought to be the extraordinary MasterBuilder, is recruited to join a quest to stop an evil LEGO tyrant from gluing the universe together.",
                thumb:"static/images/lego.jpg"
            },
            {
                movieTitle:"Pulp Fiction", 
                releaseDate:"1994", 
                movieDescription:"The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
                thumb:"static/images/pf.jpg"
            },
            {
                movieTitle:"300", 
                releaseDate:"2006", 
                movieDescription:"King Leonidas and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
                thumb:"static/images/300.jpg"
            },
            {
                movieTitle:"The Matrix", 
                releaseDate:"1999", 
                movieDescription:"A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
                thumb:"static/images/matrix.jpg"
            },
            {
                movieTitle:"Django Unchained", 
                releaseDate:"2012", 
                movieDescription:"With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
                thumb:"static/images/django.jpg"
            },
            {
                movieTitle:"Shrek", 
                releaseDate:"2001", 
                movieDescription:"An ogre, in order to regain his swamp, travels along with an annoying donkey in order to bring a princess to a scheming lord, wishing himself King.",
                thumb:"static/images/shrek.jpg"
            }
        ]
    
    };
    
    var utils = {
        //rotates an item TO a provided value
        rotate: function (itemToRotate, degreesToRotateTo){
            itemToRotate.style.webkitTransform = "rotate("+degreesToRotateTo+"deg)";
        },
        
        highlightSelection: function(itemList){
        for (var i = 0; i< itemList.length; i++)
            {
                Hammer(itemList[i]).on('tap', function() 
                {
                    var selected = false;
                    for (var j = 0; j < this.classList.length; j++)
                    {
                        if (this.classList[j] === 'selected')
                        {
                            selected = true
                        }
                    }
                    
                    if(selected)
                    {
                        this.classList.remove('selected');
                        utils.rotate(this, 0);
                    }
                    else
                    {
                        this.classList.add('selected');
                        utils.rotate(this, -5 + Math.random()*10);
                    }   
                }, false);
            }
        }
        
    };
    
    controller.init();
    
})();
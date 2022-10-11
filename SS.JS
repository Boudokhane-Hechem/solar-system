function guess(){
    if($('#in').val()=='sun')
    {$('#d').remove
    $('body').append('<div id="d"><p id="para">Our Sun is a 4.5 billion-year-old star – a hot glowing ball of hydrogen and helium at the center of our solar system. The Sun is about 93 million miles (150 million kilometers) from Earth, and without its energy, life as we know it could not exist here on our home planet.</p><div/>')
    }
    else if($('#in').val()=='venus')
    {$('#d').remove
        $('body').append('<div id="d"><p id="para">Venus is the second planet from the Sun and is Earth’s closest planetary neighbor. It’s one of the four inner, terrestrial (or rocky) planets, and it’s often called Earth’s twin because it’s similar in size and density. These are not identical twins, however – there are radical differences between the two worlds.</p><div/>')
    }
    else if($('#in').val()=='earth')
    {$('#d').remove
        $('body').append('<div id="d"><p id="para">Earth, our home planet, is a world unlike any other. The third planet from the sun, Earth is the only place in the known universe confirmed to host life.With a radius of 3,959 miles, Earth is the fifth largest planet in our solar system, and its the only one known for sure to have liquid water on its surface. Earth is also unique in terms of monikers. Every other solar system planet was named for a Greek or Roman deity, but for at least a thousand years, some cultures have described our world using the Germanic word “earth,” which means simply “the ground.”</p><div/>')
    }
    else if($('#in').val()=='mars')
    {$('#d').remove
        $('body').append('<div id="d"><p id="para">​Mars is the fourth planet from the Sun – a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past.</p><div/>')
    }
    else if($('#in').val()=='jupiter')
    {$('#d').remove
        $('body').append('<div id="d"><p id="para">Jupiter has a long history of surprising scientists – all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe.Fifth in line from the Sun, Jupiter is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined.</p><div/>')
    }
    else if($('#in').val()=='saturn')
    {$('#d').remove
        $('body').append('<div id="d"><p id="para">Saturn is the sixth planet from the Sun and the second-largest planet in our solar system.Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings – made of chunks of ice and rock – but none are as spectacular or as complicated as Saturns.</p><div/>')
    }
    else if($('#in').val()=='uranus')
    {$('#d').remove
        $('body').append('<div id="d"><p id="para">Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star.</p><div/>')
    }
    else if($('#in').val()=='neptune')
    {$('#d').remove
        $('body').append('<div id="d"><p id="para">Dark, cold, and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system.More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye and the first predicted by mathematics before its discovery. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846.</p><div/>')
    }
    else if($('#in').val()=='pluto')
    {$('#d').remove
        $('body').append('<div id="d"><p id="para">Pluto is a dwarf planet in the Kuiper Belt, a donut-shaped region of icy bodies beyond the orbit of Neptune. There may be millions of these icy objects, collectively referred to as Kuiper Belt objects (KBOs) or trans-Neptunian objects (TNOs), in this distant region of our solar system.</p><div/>')
    }
    else if($('#in').val().length>0){
        $('#d').remove
        alert('Not In Our Solar System,Try Again')
    }
    else{
        $('#d').remove
        alert('Come on, make an effort')
    }  
}
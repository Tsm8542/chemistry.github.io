function x(){
    var x = document.querySelector("#branch").value;
    var t = document.querySelector("#topic");
    switch(x){
        case 'analytical':
            t.innerHTML = '<option value="ana">All</option><option value="itac">Introduction to analytical chemistry</option><option value="sat">Some analytical techniques</option>'
            break;
        case 'metallurgy':
            t.innerHTML = '<option value="meta">All</option><option value="man">Metals & Nonmetals</option><option value="m">Metallurgy</option>'
            break;
        case 'physical':
            t.innerHTML = '<option value="phy">All</option><option value="sitstsap">Substances in surroundings-Their states & properties</option><option value="som">States of matter</option><option value="aac">Adsorption & colloids</option><option value="ce">Chemical equilibrium</option><option value="ncar">Nuclear chemistry & radioactivity</option><option value="ss">Solid state</option><option value="s">Solutions</option><option value="ie">Ionic equilibria</option><option value="ct">Chemical thermodynamics</option><option value="e">Electrochemistry</option><option value="ck">Chemical kinetics</option>'
            break;
        case 'organic':
            t.innerHTML = '<option value="org">All</option><option value="caie">Carbon-an important element</option><option value="cc">Carbon compounds</option><option value="bpooc">Basic principles of organic chemistry</option><option value="h">Hydrocarbons</option><option value="hd">Halogen derivatives</option><option value="apae">Alcohols,phenols & ether</option><option value="akaca">Aldehydes,ketones & carboxylic acids</option><option value="a">Amines</option>'
            break;
        case 'inorganic':
            t.innerHTML = '<option value="inorg">All</option><option value="pcoe">Periodic classification of elements</option><option value="mpt">Modern periodic table</option><option value="eog1a2">Elements of group 1 & 2</option><option value="eog13_14a15">Elements of group 13,14 & 15</option><option value="eog16_17a18">Elements of group 16,17 & 18</option><option value="taite">Transition & inner transition elements</option><option value="coc">Coordination compounds</option>'
            break;
        case 'applied':
            t.innerHTML = '<option value="app">All</option><option value="ponr">Properties of natural resources</option><option value="sicu">Substances in common use</option><option value="ciel">Chemistry in everyday life</option><option value="b">Biomolecules</option><option value="itpc">Introduction to polymer chemistry</option><option value="gcan">Green chemistry & nanochemistry</option>'
            break;
        default:
            t.innerHTML = '<option value="basics">All</option><option value="cpac">Changes-Physical & Chemical</option><option value="ecm">Elements,Compounds & Mixtures</option><option value="ita">Inside the atom</option><option value="com">Composition of matter</option><option value="itaab">Introduction to acid & base</option><option value="ccacb">Chemical change & chemical bond</option><option value="mom">Measurement of matter</option><option value="abas">Acids, bases & salts</option><option value="crae">Chemical reactions & equations</option><option value="sbcoc">Some basic concepts of chemistry</option><option value="soa">Structure of atom</option><option value="cb">Chemical bonding</option><option value="rr">Redox reactions</option>'
            break;
    }
    z();
}

function z(){
    var n = document.querySelector("#topic").value;
    var y = document.querySelector("#frame");
    switch(n){
        case 'basics':
            y.src = "Files/basics.html"
            break;
        case 'cpac':
            y.src = "Files/cpac.html"
            break;
        case 'ecm':
            y.src = "Files/ecm.html"
            break;    
        case 'ita':
            y.src = "Files/ita.html"
            break;
        case 'com':
            y.src = "Files/com.html"
            break;
        case 'itaab':
            y.src = "Files/itaab.html"
            break;
        case 'ccacb':
            y.src = "Files/ccacb.html"
            break;
        case 'mom':
            y.src = "Files/mom.html"
            break;
        case 'abas':
            y.src = "Files/abas.html"
            break;
        case 'crae':
            y.src = "Files/crae.html"
            break;
        case 'sbcoc':
            y.src = "Files/sbcoc.html"
            break;
        case 'soa':
            y.src = "Files/soa.html"
            break;
        case 'cb':
            y.src = "Files/cb.html"
            break;
        case 'rr':
            y.src = "Files/rr.html"
            break;
        case 'ana':
            y.src = "Files/ana.html"
            break;
        case 'itac':
            y.src = "Files/itac.html"
            break;
        case 'sat':
            y.src = "Files/sat.html"
            break;
        case 'meta':
            y.src = "Files/meta.html"
            break;
        case 'man':
            y.src = "Files/man.html"
            break;
        case 'm':
            y.src = "Files/m.html"
            break;
        case 'phy':
            y.src = "Files/phy.html"
            break;
        case 'sitstsap':
            y.src = "Files/sitstsap.html"
            break;
        case 'som':
            y.src = "Files/som.html"
            break;
        case 'aac':
            y.src = "Files/aac.html"
            break;
        case 'ce':
            y.src = "Files/ce.html"
            break;
        case 'ncar':
            y.src = "Files/ncar.html"
            break;
        case 'ss':
            y.src = "Files/ss.html"
            break;
        case 's':
            y.src = "Files/s.html"
            break;
        case 'ie':
            y.src = "Files/ie.html"
            break;
        case 'ct':
            y.src = "Files/ct.html"
            break;
        case 'e':
            y.src = "Files/e.html"
            break;
        case 'ck':
            y.src = "Files/ck.html"
            break;
        case 'org':
            y.src = "Files/org.html"
            break;
        case 'caie':
            y.src = "Files/caie.html"
            break;
        case 'cc':
            y.src = "Files/cc.html"
            break;
        case 'bpooc':
            y.src = "Files/bpooc.html"
            break;
        case 'h':
            y.src = "Files/h.html"
            break;
        case 'hd':
            y.src = "Files/hd.html"
            break;
        case 'apae':
            y.src = "Files/apae.html"
            break;
        case 'akaca':
            y.src = "Files/akaca.html"
            break;
        case 'a':
            y.src = "Files/a.html"
            break;
        case 'inorg':
            y.src = ""
            break;
        case 'pcoe':
            y.src = ""
            break;
        case 'mpt':
            y.src = ""
            break;
        case 'eog1a2':
            y.src = ""
            break;
        case 'eog13_14a15':
            y.src = ""
            break;
        case 'eog16_17a18':
            y.src = ""
            break;
        case 'taite':
            y.src = ""
            break;
        case 'coc':
            y.src = ""
            break;
        case 'app':
            y.src = ""
            break;
        case 'ponr':
            y.src = ""
            break;
        case 'sicu':
            y.src = ""
            break;
        case 'ciel':
            y.src = ""
            break;
        case 'b':
            y.src = ""
            break;
        case 'itpc':
            y.src = ""
            break;
        case 'gcan':
            y.src = ""
            break;
    }
    console.log(n)
}
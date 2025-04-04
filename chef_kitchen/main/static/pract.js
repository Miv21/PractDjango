//Слайдер
let swiper = null; // глобальная переменная

window.onload = function () {
    loadCards();
};

function loadCards() {
    fetch('/cards/')
        .then(response => response.json())
        .then(cards => {
            const container = document.querySelector(".swiper-wrapper");

            if (!container) {
                console.error("Контейнер .swiper-wrapper не найден");
                return;
            }

            container.innerHTML = ""; // очищаем старые слайды

            if (cards.length === 0) {
                console.log("Нет карточек");
                return;
            }

            cards.forEach(card => {
                const slide = document.createElement("div");
                slide.classList.add("swiper-slide");
                slide.innerHTML = `
                    <div class="cads_item">
                        <img class="cad_imgg" src="/cards/${card.id}/image/" alt="${card.name}">
                        <p class="name_blud">${card.name}</p>
                        <p class="opis_bludd">${card.description}</p>
                        <p class="ingrin">
                            Protein - ${card.protein} g<br>
                            Fat - ${card.fat} g<br>
                            Carbohydrates - ${card.carbohydrates} g<br>
                            Energy - ${card.energy} kcal<br>
                            Total weight: ${card.total_weight} g
                        </p>
                    </div>
                `;
                container.appendChild(slide);
            });

            // Переинициализируем Swiper
            if (swiper) {
                swiper.destroy(true, true); // удалим предыдущий экземпляр
            }

            swiper = new Swiper(".mySwiper", {
                slidesPerView: 2,
                spaceBetween: 10,
                navigation: {
                    nextEl: ".but_surch2-button-next",
                    prevEl: ".but_surch-button-prev",
                },
                breakpoints: {
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 4, spaceBetween: 40 },
                    1024: { slidesPerView: 5, spaceBetween: 50 },
                },
            });

            console.log("Swiper успешно инициализирован");
        })
        .catch(error => {
            console.error("Ошибка загрузки карточек:", error);
        });
}



//функции открытие и закрытие окна tg
const html = document.querySelector('html');

document.getElementById("telbt").addEventListener("click",function()
{
    document.getElementById("modal").classList.add("open");
    html.style.overflowY = 'hidden'
})


document.getElementById("cencel").addEventListener("click",function()
{
    document.getElementById("modal").classList.remove("open");
    html.style.overflowY = 'scroll'
})


document.querySelector("#modal .modalcontent").addEventListener('click', event => 
{
    event._isClickWithInModal = true;
});
document.getElementById("modal").addEventListener('click', event => {
    if (event._isClickWithInModal)return;
    {
        event.currentTarget.classList.remove('open');
        html.style.overflowY = 'scroll'
    }
});

//функции открытие и закрытие окна входа

document.getElementById("singin").addEventListener("click",function()
{
    document.getElementById("singinmodal").classList.add("open");
    html.style.overflowY = 'hidden'
})



document.getElementById("cencel1").addEventListener("click",function()
{
    document.getElementById("singinmodal").classList.remove("open");
    html.style.overflowY = 'scroll'
})


document.querySelector("#singinmodal .signImModelContent").addEventListener('click', event => 
{
    event._isClickWithInModal = true;
});
document.getElementById("singinmodal").addEventListener('click', event => {
    if (event._isClickWithInModal)return;
    {
        event.currentTarget.classList.remove('open');
        html.style.overflowY = 'scroll'
    }
});

//функции открытие и закрытие окна регистрации
document.getElementById("singin2").addEventListener("click",function()
{
    document.getElementById("singinmodal2").classList.add("open");
    html.style.overflowY = 'hidden'
})

document.getElementById('registerbts').addEventListener('click', function()
{
    document.getElementById("singinmodal").classList.remove("open");
    setTimeout(() =>
    {
        document.getElementById("singinmodal2").classList.add("open");
    },400);
})


document.getElementById('vhod').addEventListener('click', function()
{
    document.getElementById("singinmodal2").classList.remove("open");
    setTimeout(() =>
    {
        document.getElementById("singinmodal").classList.add("open");
    },400);
})


document.getElementById("cencel2").addEventListener("click",function()
{
    document.getElementById("singinmodal2").classList.remove("open");
    html.style.overflowY = 'scroll'
})


document.querySelector("#singinmodal2 .signImModelContent2").addEventListener('click', event => 
{
    event._isClickWithInModal = true;
});
document.getElementById("singinmodal2").addEventListener('click', event => {
    if (event._isClickWithInModal)return;
    {
        event.currentTarget.classList.remove('open');
        html.style.overflowY = 'scroll'
    }
});

//MakeyureChose функции

document.getElementById("MakeYourChoseBt").addEventListener("click",function()
{
    document.getElementById("MakeYourChoseModal").classList.add("open");
    html.style.overflowY = 'hidden'
})



document.getElementById("cencel3").addEventListener("click",function()
{
    document.getElementById("MakeYourChoseModal").classList.remove("open");
    html.style.overflowY = 'scroll'
})

document.querySelector("#MakeYourChoseModal .MakeYourChoseModalContent").addEventListener('click', event => 
{
    event._isClickWithInModal = true;
});
document.getElementById("MakeYourChoseModal").addEventListener('click', event => {
    if (event._isClickWithInModal)return;
    {
        event.currentTarget.classList.remove('open');
        html.style.overflowY = 'scroll'
    }
});


// другие функции
function tg()
{
    document.getElementById("cencel").disabled = true;
    location.href = 'https://web.telegram.org/a/';
}

//Функци FQA

//oткрытие и закрытие разделов FQA

let vopr1 = true;
let vopr2 = false;
let vopr3 = false;
let vopr4 = false;
let vopr5 = false;
let vopr6 = false;
let voprbt1 = document.querySelectorAll('.voprbt1');
let otvbt1 = document.querySelectorAll('.otvbt1');
let voprbt2 = document.querySelectorAll('.voprbt2');
let otvbt2 = document.querySelectorAll('.otvbt2');
let voprbt3 = document.querySelectorAll('.voprbt3');
let otvbt3 = document.querySelectorAll('.otvbt3');
let voprbt4 = document.querySelectorAll('.voprbt4');
let otvbt4 = document.querySelectorAll('.otvbt4');
let voprbt5 = document.querySelectorAll('.voprbt5');
let otvbt5 = document.querySelectorAll('.otvbt5');
let voprbt6 = document.querySelectorAll('.voprbt6');
let otvbt6 = document.querySelectorAll('.otvbt6');

function voprclose() 
{
    voprbt1.forEach(function(voprbt1) 
    {
        setTimeout (() =>
        {
            voprbt1.classList.remove('open');     
        },100);
        otvbt1.forEach(function(item) 
        {
            item.classList.remove('open');
        });
    });
    voprbt2.forEach(function(voprbt2) 
    {
        setTimeout (() =>
        {
            voprbt2.classList.remove('open');    
        },100);
        
        otvbt2.forEach(function(item2) 
        {
            item2.classList.remove('open');
        });
    });
    voprbt3.forEach(function(voprbt3) 
    {
        setTimeout (() =>
        {
            voprbt3.classList.remove('open');    
        },100);
        otvbt3.forEach(function(item3) 
        {
            item3.classList.remove('open');
        });
    });
    voprbt4.forEach(function(voprbt4) 
    {
        setTimeout (() =>
        {
            voprbt4.classList.remove('open');   
        },100);
        otvbt4.forEach(function(item4) 
        {
            item4.classList.remove('open');
        });
    });
    voprbt5.forEach(function(voprbt5) 
    {
        setTimeout (() =>
        {
            voprbt5.classList.remove('open');   
        },100);
        otvbt5.forEach(function(item5) 
        {
            item5.classList.remove('open');
        });
    });
    voprbt6.forEach(function(voprbt6) 
    {
        setTimeout (() =>
        {
            voprbt6.classList.remove('open');  
        },100);
        otvbt6.forEach(function(item6) 
        {
            item6.classList.remove('open');
        });
    });
    if (vopr1 === true) 
    {
        vopr1 = false;
        document.getElementById("vopr1").classList.add("close");
        setTimeout(() =>
        {
            document.getElementById("vopr1").style.display='none'
            document.getElementById("faqbt1").disabled = false;
            document.getElementById("faqbt1").style.background = '#FFF';
            document.getElementById("faqbt1").style.border = '#FFF';
            document.getElementById("faqbt1").style.color = '#000';
            document.getElementById("Vector1").style.fill = '#000';
            document.getElementById("Vector2").style.fill = '#000';
            document.getElementById("Vector3").style.fill = '#000';
            document.getElementById("Vector4").style.fill = '#000';
        },800);
        return vopr1;
    }
    else if(vopr2 === true) 
    {
        vopr2 = false;
        document.getElementById("vopr2").classList.remove("open");
        setTimeout(() =>
        {
            document.getElementById("vopr2").style.display='none'
            document.getElementById("faqbt2").disabled = false;
            document.getElementById("faqbt2").style.background = '#FFF';
            document.getElementById("faqbt2").style.border = '#FFF';
            document.getElementById("faqbt2").style.color = '#000';
            document.getElementById("Vector5").style.fill = '#000';
        },800);
        return vopr2;
    }
    else if(vopr3 === true) 
    {
        vopr3 = false;
        document.getElementById("vopr3").classList.remove("open");
        setTimeout(() =>
        {
            document.getElementById("vopr3").style.display='none'
            document.getElementById("faqbt3").disabled = false;
            document.getElementById("faqbt3").style.background = '#FFF';
            document.getElementById("faqbt3").style.border = '#FFF';
            document.getElementById("faqbt3").style.color = '#000';
            document.getElementById("Vector6").style.fill = '#000';
        },800);
        return vopr3;
    }
    else if(vopr4 === true) 
    {
        vopr4 = false;
        document.getElementById("vopr4").classList.remove("open");
        setTimeout(() =>
        {
            document.getElementById("vopr4").style.display='none'
            document.getElementById("faqbt4").disabled = false;
            document.getElementById("faqbt4").style.background = '#FFF';
            document.getElementById("faqbt4").style.border = '#FFF';
            document.getElementById("faqbt4").style.color= '#000';
            document.getElementById("Vector7").style.fill = '#000';
            document.getElementById("Vector8").style.fill = '#000';
            document.getElementById("Vector9").style.fill = '#000';
            document.getElementById("Vector10").style.fill = '#000';
            document.getElementById("Vector11").style.fill = '#000';
            document.getElementById("Vector12").style.fill = '#000';
            document.getElementById("Vector13").style.fill = '#000';
            document.getElementById("Vector14").style.fill = '#000';
            document.getElementById("Vector15").style.fill = '#000';
            document.getElementById("Vector16").style.fill = '#000';
            document.getElementById("Vector17").style.fill = '#000';
            document.getElementById("Vector18").style.fill = '#000';
            document.getElementById("Vector19").style.fill = '#000';
            document.getElementById("Vector20").style.fill = '#000';
            document.getElementById("Vector21").style.fill = '#000';
            document.getElementById("Vector22").style.fill = '#000';
            document.getElementById("Vector23").style.fill = '#000';
            document.getElementById("Vector24").style.fill = '#000';

        },800);
        return vopr4;
    }
    else if(vopr5 === true) 
    {
        vopr5 = false;
        document.getElementById("vopr5").classList.remove("open");
        setTimeout(() =>
        {
            document.getElementById("vopr5").style.display='none'
            document.getElementById("faqbt5").disabled = false;
            document.getElementById("faqbt5").style.background = '#FFF';
            document.getElementById("faqbt5").style.border = '#FFF';
            document.getElementById("faqbt5").style.color = '#000';
            document.getElementById("Vector25").style.fill = '#000';
            document.getElementById("Vector26").style.fill = '#000';
            document.getElementById("Vector27").style.fill = '#000';
            document.getElementById("Vector28").style.fill = '#000';
            document.getElementById("Vector29").style.fill = '#000';
            document.getElementById("Vector30").style.fill = '#000';
        },800);
        return vopr5;
    }
    else if(vopr6 === true) 
    {
        vopr6 = false;
        document.getElementById("vopr6").classList.remove("open");
        setTimeout(() =>
        {
            document.getElementById("vopr6").style.display='none'
            document.getElementById("faqbt6").disabled = false;
            document.getElementById("faqbt6").style.background = '#FFF';
            document.getElementById("faqbt6").style.border = '#FFF';
            document.getElementById("faqbt6").style.color = '#000';
            document.getElementById("Vector31").style.fill = '#000';
        },800);
        return vopr6;
    }
}

function handleButtonClick(button) 
{
    voprclose()
    setTimeout(() =>
    {

        if(button.classList.contains('faqbutt'))
        {
            document.getElementById("vopr1").style.display='grid'
            document.getElementById("vopr1").classList.remove("close");
            document.getElementById("faqbt1").disabled = true;
            document.getElementById("faqbt1").style.background = '#8EC038';
            document.getElementById("faqbt1").style.border = '#8EC038';
            document.getElementById("faqbt1").style.color = '#FFF';
            document.getElementById("Vector1").style.fill = '#FFF';
            document.getElementById("Vector2").style.fill = '#FFF';
            document.getElementById("Vector3").style.fill = '#FFF';
            document.getElementById("Vector4").style.fill = '#FFF';
            vopr1 = true;
            return vopr1;
        }
        else if(button.classList.contains('faqbutt2'))
        {
            document.getElementById("vopr2").style.display='grid'
            document.getElementById("vopr2").classList.add("open");
            document.getElementById("faqbt2").disabled = true;
            document.getElementById("faqbt2").style.background = '#8EC038';
            document.getElementById("faqbt2").style.border = '#8EC038';
            document.getElementById("faqbt2").style.color = '#FFF';
            document.getElementById("Vector5").style.fill = '#FFF';
            vopr2 = true;
            return vopr2;
        }
        else if(button.classList.contains('faqbutt3'))
        {
            document.getElementById("vopr3").style.display='grid'
            document.getElementById("vopr3").classList.add("open");
            document.getElementById("faqbt3").disabled = true;
            document.getElementById("faqbt3").style.background = '#8EC038';
            document.getElementById("faqbt3").style.border = '#8EC038';
            document.getElementById("faqbt3").style.color = '#FFF';
            document.getElementById("Vector6").style.fill = '#FFF';
            vopr3 = true;
            return vopr3;
        }
        else if(button.classList.contains('faqbutt4'))
        {
            document.getElementById("vopr4").style.display='grid'
            document.getElementById("vopr4").classList.add("open");
            document.getElementById("faqbt4").disabled = true;
            document.getElementById("faqbt4").style.background = '#8EC038';
            document.getElementById("faqbt4").style.border = '#8EC038';
            document.getElementById("faqbt4").style.color = '#FFF';
            document.getElementById("Vector7").style.fill = '#FFF';
            document.getElementById("Vector8").style.fill = '#FFF';
            document.getElementById("Vector9").style.fill = '#FFF';
            document.getElementById("Vector10").style.fill = '#FFF';
            document.getElementById("Vector11").style.fill = '#FFF';
            document.getElementById("Vector12").style.fill = '#FFF';
            document.getElementById("Vector13").style.fill = '#FFF';
            document.getElementById("Vector14").style.fill = '#FFF';
            document.getElementById("Vector15").style.fill = '#FFF';
            document.getElementById("Vector16").style.fill = '#FFF';
            document.getElementById("Vector17").style.fill = '#FFF';
            document.getElementById("Vector18").style.fill = '#FFF';
            document.getElementById("Vector19").style.fill = '#FFF';
            document.getElementById("Vector20").style.fill = '#FFF';
            document.getElementById("Vector21").style.fill = '#FFF';
            document.getElementById("Vector22").style.fill = '#FFF';
            document.getElementById("Vector23").style.fill = '#FFF';
            document.getElementById("Vector24").style.fill = '#FFF';
            vopr4 = true;
            return vopr4;
        }
        else if(button.classList.contains('faqbutt5'))
        {
            document.getElementById("vopr5").style.display='grid'
            document.getElementById("vopr5").classList.add("open");
            document.getElementById("faqbt5").disabled = true;
            document.getElementById("faqbt5").style.background = '#8EC038';
            document.getElementById("faqbt5").style.border = '#8EC038';
            document.getElementById("faqbt5").style.color = '#FFF';
            document.getElementById("Vector25").style.fill = '#FFF';
            document.getElementById("Vector26").style.fill = '#FFF';
            document.getElementById("Vector27").style.fill = '#FFF';
            document.getElementById("Vector28").style.fill = '#FFF';
            document.getElementById("Vector29").style.fill = '#FFF';
            document.getElementById("Vector30").style.fill = '#FFF';
            vopr5 = true;
            return vopr5;
        }
        else if(button.classList.contains('faqbutt6'))
        {
            document.getElementById("vopr6").style.display='grid'
            document.getElementById("vopr6").classList.add("open");
            document.getElementById("faqbt6").disabled = true;
            document.getElementById("faqbt6").style.background = '#8EC038';
            document.getElementById("faqbt6").style.border = '#8EC038';
            document.getElementById("faqbt6").style.color = '#FFF';
            document.getElementById("Vector31").style.fill = '#FFF';
            vopr6 = true;
            return vopr6;
        }

    },800);
}
//Функции откритие и закрвтие вопросов FAQ



voprbt1.forEach(function(voprbt1) 
{
    voprbt1.addEventListener('click', function() 
    {
        if (voprbt1.classList.contains('open')) 
        {
            setTimeout (() =>
            {
                voprbt1.classList.remove('open');
            },100);
            otvbt1.forEach(function(item) 
            {
                item.classList.remove('open');
            });
        }
        else 
        {
            setTimeout (() =>
            {
                voprbt1.classList.add('open');
            },100);
            otvbt1.forEach(function(item) 
            {
                item.classList.add('open');
            });
        }
    });
});

voprbt2.forEach(function(voprbt2) 
{
    voprbt2.addEventListener('click', function() 
    {
        if (voprbt2.classList.contains('open')) 
        {
            setTimeout (() =>
            {
                voprbt2.classList.remove('open');
            },100);    
            otvbt2.forEach(function(item2) 
            {
                item2.classList.remove('open');
            });
        }
        else 
        {
            setTimeout (() =>
            {
                voprbt2.classList.add('open');
            },100);
            otvbt2.forEach(function(item2) 
            {
                item2.classList.add('open');
            });
        }
    });
});

voprbt3.forEach(function(voprbt3) 
{
    voprbt3.addEventListener('click', function() 
    {
        if (voprbt3.classList.contains('open')) 
        {
            setTimeout (() =>
            {
                voprbt3.classList.remove('open');
            },100);
            otvbt3.forEach(function(item3) 
            {
                item3.classList.remove('open');
            });
        }
        else 
        {
            setTimeout (() =>
            {
                voprbt3.classList.add('open');
            },100);
            otvbt3.forEach(function(item3) 
            {
                item3.classList.add('open');
            });
        }
    });
});

voprbt4.forEach(function(voprbt4) 
{
    voprbt4.addEventListener('click', function() 
    {
        if (voprbt4.classList.contains('open')) 
        {
            setTimeout (() =>
            {
               voprbt4.classList.remove('open'); 
            },100);
            otvbt4.forEach(function(item4) 
            {
                item4.classList.remove('open');
            });
        }
        else 
        {
            setTimeout (() =>
            {
                voprbt4.classList.add('open');
            },100); 
            otvbt4.forEach(function(item4) 
            {
                item4.classList.add('open');
            });
        }
    });
});

voprbt5.forEach(function(voprbt5) 
{
    voprbt5.addEventListener('click', function() 
    {
        if (voprbt5.classList.contains('open')) 
        {
            setTimeout (() =>
            {
               voprbt5.classList.remove('open'); 
            },100);
            otvbt5.forEach(function(item5) 
            {
                item5.classList.remove('open');
            });
        }
        else 
        {
            setTimeout (() =>
            {
                voprbt5.classList.add('open');
            },100);
            otvbt5.forEach(function(item5) 
            {
                item5.classList.add('open');
            });
        }
    });
});

voprbt6.forEach(function(voprbt6) 
{
    voprbt6.addEventListener('click', function() 
    {
        if (voprbt6.classList.contains('open')) 
        {
            setTimeout (() =>
            {
                voprbt6.classList.remove('open');
            },100);
            otvbt6.forEach(function(item6) 
            {
                item6.classList.remove('open');
            });
        }
        else 
        {
            setTimeout (() =>
            {
                voprbt6.classList.add('open');
            },100);
            otvbt6.forEach(function(item6) 
            {
                item6.classList.add('open');
            });
        }
    });
});
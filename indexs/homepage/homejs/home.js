const menuItems = document.querySelectorAll(".menu-item");
const NotificationnUpdate = document.querySelector('.notification-update');
const NotificationnCount = document.querySelector('#notification .countNotification');
const message = document.querySelectorAll('.message');
const Fontsize = document.querySelectorAll('.chooseSize span');
var rightSide = document.querySelector('.rightSide');
var leftSide = document.querySelector('.leftSide');
var btnFirst = document.querySelector('.btn-first');
var btnFirsts = document.querySelector('main .btn-first');
var btnFirstRs = document.querySelector('.friendRequest .btn-first');
var btnFirstMs = document.querySelector('.friendRequest .mary .btn-first');
var btnFirstDs = document.querySelector('.friendRequest .duke .btn-first');
var customizeShadow = document.querySelector('.card');
const colorChange = document.querySelectorAll('.chooseColor span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');
const bgActive = document.querySelectorAll('.choose-bg div');

const Height = () => {
    leftSides.classList.toggle('height');
    side.classList.toggle("display-block");
    Proboy.classList.toggle("d-f");
}

icon.addEventListener('click', Height);

profileSet.addEventListener('click', () => settingDisplay.classList.toggle('max'));

const ChangeactiveState = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        ChangeactiveState();
        item.classList.add('active');
        if (item.id != 'notification') {
            NotificationnUpdate.style.display = 'none';
        }
        else {
            NotificationnUpdate.style.display = 'block';
            NotificationnCount.style.display = 'none';
        }
    });
});

const messageSearch = () => {
    message.forEach(chat => {
        chat.style.display = (chat.querySelector('h5').textContent.toLowerCase().indexOf(Searchmessage.value.toLowerCase()) != -1) ? 'flex' : 'none'
    })
}

Searchmessage.addEventListener('keyup', messageSearch);

messageNotification.addEventListener('click', () => {
    messagesareas.classList.add('myboxshadow');
    messageNotification.querySelector('.countNotification').style.display = 'none';
    setTimeout(() => {
        messagesareas.classList.remove('myboxshadow');
    }, 2000);
})
const openThemeModal = () => {
    themeCustomization.style.display = 'grid';
}

const closeThemeModal = (event) => {
    if (event.target.classList.contains('customizeTheme')) {
        themeCustomization.style.display = 'none';
    }
}
themeCustomization.addEventListener('click', closeThemeModal)
theme.addEventListener('click', openThemeModal)


const removeSeclectorActive = () => {
    Fontsize.forEach(size => {
        size.classList.remove('active');

    })
}

Fontsize.forEach(size => {

    size.addEventListener('click', () => {
        let fontSize;
        removeSeclectorActive();
        size.classList.toggle('active');

        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            leftSide.style.top = '5.4rem';
            rightSide.style.top = '5.4rem';
        }
        else if (size.classList.contains('font-size-2')) {
            fontSize = '14px';
            leftSide.style.top = '5.4rem';
            rightSide.style.top = '-7rem';
        }
        else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            leftSide.style.top = '-2rem';
            rightSide.style.top = '-17rem';
        }
        else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            leftSide.style.top = '-5rem';
            rightSide.style.top = '-25rem';
        }
        else if (size.classList.contains('font-size-5')) {
            fontSize = '24px';
            leftSide.style.top = '-12rem';
            rightSide.style.top = '-35rem';
        }
        document.querySelector('html').style.fontSize = fontSize;
    })
});

const changeActiveColor = () => {
    colorChange.forEach(pickcolor => {
        pickcolor.classList.remove('active');
    })
}
colorChange.forEach(color => {
    color.addEventListener('click', () => {
        changeActiveColor();
        if (color.classList.contains('color-1')) {
            myColorhex = '#6b4ce6';
        }
        else if (color.classList.contains('color-2')) {
            myColorhex = '#e6d14c';
        }
        else if (color.classList.contains('color-3')) {
            myColorhex = '#e64c61';
        }
        else if (color.classList.contains('color-4')) {
            myColorhex = '#4ce69e';
        }
        else if (color.classList.contains('color-5')) {
            myColorhex = '#4cade6';
        }
        color.classList.add('active');
        [btnFirst, btnFirsts, btnFirstRs, btnFirstMs, btnFirstDs, sub, seeMore].forEach(btn => (btn.style.background = myColorhex))
        customizeShadow.style.boxShadow = `0 0 1rem ${myColorhex}`;
    })
})

const removeBord = () => {
    bgActive.forEach(bord => {
        bord.classList.remove('active');
    })
};

bgActive.forEach(bord => {
    bord.addEventListener('click', () => {
        removeBord();
        bord.classList.toggle('active');
    })
});


Bg1.addEventListener('click', () => {
    document.body.classList.add('bg-1');
    document.body.classList.remove('bg-2');
    document.body.classList.remove('bg-3');
});
Bg2.addEventListener('click', () => {
    document.body.classList.add('bg-2');
    document.body.classList.remove('bg-1');
})
Bg3.addEventListener('click', () => {
    document.body.classList.add('bg-3');
    document.body.classList.remove('bg-2');
    document.body.classList.remove('bg-1');
})
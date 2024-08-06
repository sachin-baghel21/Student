                                  // Circular Progress bar code
      
                                  function setProgress(percent) {
                                    const progressContainer = document.querySelector('.progress-container');
                                  const progressText = document.getElementById('progress-text');
                                  progressContainer.style.setProperty('--progress', `${percent}%`);
                                  progressText.textContent = `${percent}%`;
                                }
                            
                                let progress = 0;
                                const interval = setInterval(() => {
                                  if (progress <= 75) {
                                    setProgress(progress);
                                    progress++;
                                  } else {
                                    clearInterval(interval);
                                  }
                                }, 30);

var move = document.getElementById('profile-pop');
const icon = document.getElementById('icon');

icon.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from reaching the document
    move.classList.add('hide');

    // Adding a click event listener to the document to show the 'profile-pop' element again
    document.addEventListener('click', () => {
        move.classList.remove('hide');
    });
});

                var reg = document.querySelector('.Registration-link');
                var Reg_links = document.querySelector('.reg-links');
                reg.addEventListener('click', () => {
                    Reg_links.classList.toggle("reg-active");
                })
            var main = document.querySelector('.Main-link');
            var Main_links = document.querySelector('.main-links');
            main.addEventListener('click', () => {
            Main_links.classList.toggle('main-active');        
            })
                var fac = document.querySelector('.Faculty-link');
                var fac_links = document.querySelector('.fac-links');

            fac.addEventListener('click', () => {
                fac_links.classList.toggle('fac-active');        
                })
                
            var fee = document.querySelector('.Fee-link');
            var fee_links = document.querySelector('.fee-links');

                fee.addEventListener('click', () => {
                fee_links.classList.toggle('fee-active');
                })
            var result = document.querySelector('.Result-link');
            var res_links = document.querySelector('.res-links');

                result.addEventListener('click', () => {
                res_links.classList.toggle('res-active');
            })

                                            // Aside links code here

var AsideLink = document.querySelector('#aside-link');
var inside = document.querySelector('#cross-icon');
var aside = document.querySelector('.aside-bar');

AsideLink.addEventListener('click', () => {
    aside.classList.add('aside-active');
});

inside.addEventListener('click', () => {
    aside.classList.remove('aside-active');
});

// profile update code here
// var img = document.getElementById('user-img');
// var img = document.getElementById('user-img1');
// var profileLink = document.getElementById('profile-link');
// 
// profileLink.onchange = ()=> {
    // img.src = URL.createObjectURL(profileLink.files[0]);
    // img.src = URL.createObjectURL(profileLink.files[1]);
// }
    
var img1 = document.getElementById('user-img');
var img2 = document.getElementById('user-img1');
var profileLink = document.getElementById('profile-link');

profileLink.addEventListener('change', () => {
    if (profileLink.files.length > 0) {
        var imageUrl = URL.createObjectURL(profileLink.files[0]);
        img1.src = imageUrl;
        img2.src = imageUrl;
    }
});
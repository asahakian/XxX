const root = document.getElementById("root");

// eight section

function EightSection() {
    const container = document.createElement("div");

    container.classList.add("eight-section");

    container.innerHTML = `
        <div class="es-txt-block">
            <span class="es-span">bestsellers</span>
            <a href="https://github.com/asahakian" class="es-link">view my profile ></a>
        </div>

        <div class="es-images-block">


            <div class="es-images">
                <img src="./images/shop-prev-1.jpg" alt="" class="es-img">
                <p class="es-img-title">g-star polo applique jersey</p>
                <p class="es-img-price">$̶ 1̶5̶0̶.̶0̶0̶  $94.75</p>
                <button class="es-img-btn">add to card</button>
            </div>


            <div class="es-images">
                <img src="./images/shop-prev-2.jpg" alt="" class="es-img">
                <p class="es-img-title">only % sons pique polo shirt</p>
                <p class="es-img-price">$ 28.99</p>
                <button class="es-img-btn">add to card</button>
            </div>


            <div class="es-images">
                <img src="./images/shop-prev-3.jpg" alt="" class="es-img">
                <p class="es-img-title">longlive long sleeve</p>
                <p class="es-img-price">$ 39.99</p>
                <button class="es-img-btn">add to card</button>
            </div>


            <div class="es-images">
                <img src="./images/shop-prev-4.jpg" alt="" class="es-img">
                <p class="es-img-title">polo shirt with floral serves</p>
                <p class="es-img-price">$ 85.99</p>
                <button class="es-img-btn">add to card</button>
            </div>


        </div>
    `

    return container;
}

// eight section











// seventh section

function SeventhSection() {
    const container = document.createElement("div");

    container.classList.add("seventh-section");

    container.innerHTML = `
        <div class="seventh-sec-text-block">why choose us?</div>

        <div class="icons-block">


            <div class="ss-icns">
                <div class="star-icn"></div>
                <h3 class="title">we're creative</h3>
                <p class="content">Lorem ipsum dolor sit amet, c-r adipiscing elit. In maximus ligula semper metus
                pellentesque mattis. Maecenas volutpat,
                diam enim.</p>
            </div>

            <div class="ss-icns">
                <div class="clock-icn"></div>
                <h3 class="title">we're punctual</h3>
                <p class="content">Proin fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend, lorem fermentum orci sit amet, iaculis libero.
                </p>
            </div>

            <div class="ss-icns">
                <div class="baloon-icn"></div>
                <h3 class="title">we have magic</h3>
                <p class="content">Curabitur iaculis accumsan augue, nec finibus mauris
                pretium eu. Duis placerat ex gravida nibh tristique
                porta. Nulla facilisi. Suspendisse ultricies eros blandit.
                </p>
            </div>


        </div>


        <div class="icons-block">


            <div class="ss-icns">
                <div class="heart-icn"></div>
                <h3 class="title">we have magic</h3>
                <p class="content">Cras luctus interdum sodales. Quisque quis odio dui.
                Sedes sit amet neque malesuada, lobortis commodo
                magna ntesque pharetra metus vivera sagittis.
                </p>
            </div>

            <div class="ss-icns">
                <div class="responsible-icn"></div>
                <h3 class="title">we're responsible</h3>
                <p class="content">Fusce aliquet quam eget neque ultrices elementum.
                Nulla posuere felis id arcu blandit sagittis. Eleifender
                vestibulum purus, sit amet vulputate risus.
                </p>
            </div>

            <div class="ss-icns">
                <div class="chat-icn"></div>
                <h3 class="title">we're friendly</h3>
                <p class="content">Pulvinar vitae neque et porttitor. Integer non dapibus
                diam, ac eleifend lectus. Praesent sed nisi eleifend,
                fermentum orci sit amet, iaculis libero interdum.
                </p>
            </div>


        </div>
    `

    return container;
}







// seventh section

// sixth section

function WiewPortfolio() {
    const container = document.createElement("div");

    container.classList.add("view-portfolio");

    container.innerHTML = `
        <h3 class="view-title">want to see more works?</h3>
        
        <button>
            <a href="https://github.com/asahakian?tab=repositories">visit my github page</a>
        </button>
    `

    return container;
}

function SixthSection() {
    const container = document.createElement("div");

    container.classList.add("sixth-section");

    container.innerHTML = `
        <h3 class="sixth-sec-h3">latest works</h3>
        <p class="sixth-sec-p">Curabitur eu adipiscing lacus, a iaculis diam. Nullam placerat blandit auctor. Nulla accumsan ipsum et nibh
        rhoncus, eget tempus sapien ultricies. Donec mollis lorem vehicula.
        </p>

        <div class="sixth-sec-images">
            <div class="brand-images">
                <img src="./images/book.jpg">
                <div class="brandTxt">
                    man external page
                </div>
            </div>

            <div class="brand-images">
                <img src="./images/class.jpg">

                <div class="brandTxt">
                    woman external page
                </div>
            </div>

            <div class="brand-images">
                <img src="./images/man.jpg">

                <div class="brandTxt">
                    man with bag external page
                </div>
            </div
        </div>
    `

    return container;
}

// sixth section











// fifth section

function FifthSecLogoThree() {
    const container = document.createElement("div");

    container.classList.add("fifth-sec-logo");

    container.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="60px" height="60px" fill="#111111">
            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
        </svg>

        <h3>3. product</h3>
    `

    return container;
}

function FifthSecLogoTwo() {
    const container = document.createElement("div");

    container.classList.add("fifth-sec-logo");

    container.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="60px" height="60px" fill="#111111">
        <path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/>
    </svg>

    <h3>2. make</h3>
    `

    return container;
}

function FifthSecLogoOne() {
    const container = document.createElement("div");

    container.classList.add("fifth-sec-logo");

    container.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="60px" height="60px" fill="#111111">
        <path d="M284.046,224.8a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,284.046,224.8Zm-110.45,0a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,173.6,224.8Zm220.923,0a34.114,34.114,0,1,0,34.317,34.113A34.215,34.215,0,0,0,394.519,224.8Zm153.807-55.319c-15.535-24.172-37.31-45.57-64.681-63.618-52.886-34.817-122.374-54-195.666-54a405.975,405.975,0,0,0-72.032,6.357,238.524,238.524,0,0,0-49.51-36.588C99.684-11.7,40.859.711,11.135,11.421A14.291,14.291,0,0,0,5.58,34.782C26.542,56.458,61.222,99.3,52.7,138.252c-33.142,33.9-51.112,74.776-51.112,117.337,0,43.372,17.97,84.248,51.112,118.148,8.526,38.956-26.154,81.816-47.116,103.491a14.284,14.284,0,0,0,5.555,23.34c29.724,10.709,88.549,23.147,155.324-10.2a238.679,238.679,0,0,0,49.51-36.589A405.972,405.972,0,0,0,288,460.14c73.313,0,142.8-19.159,195.667-53.975,27.371-18.049,49.145-39.426,64.679-63.619,17.309-26.923,26.07-55.916,26.07-86.125C574.394,225.4,565.634,196.43,548.326,169.485ZM284.987,409.9a345.65,345.65,0,0,1-89.446-11.5l-20.129,19.393a184.366,184.366,0,0,1-37.138,27.585,145.767,145.767,0,0,1-52.522,14.87c.983-1.771,1.881-3.563,2.842-5.356q30.258-55.68,16.325-100.078c-32.992-25.962-52.778-59.2-52.778-95.4,0-83.1,104.254-150.469,232.846-150.469s232.867,67.373,232.867,150.469C517.854,342.525,413.6,409.9,284.987,409.9Z"/>
    </svg>

    <h3>1. discuss</h3>
    `

    return container;
}

function FifthSecTxt() {
    const container = document.createElement("div");

    container.classList.add("fifth-sec-txt");

    container.innerHTML = `
        <h3>WORK PROCESS</h3>

        <p>Lorem ipsum dolor sit amet, c-r
        adipiscing elit. In maximus ligula semper
        metus pellentesque mattis. Maecenas
        volutpat, diam enim.</p>
    `

    return container;
}

function FifthSection() {
    const container = document.createElement("div");

    container.classList.add("fifth-section");

    container.appendChild(FifthSecTxt());
    container.appendChild(FifthSecLogoOne());
    container.appendChild(FifthSecLogoTwo());
    container.appendChild(FifthSecLogoThree());

    return container;
}







// fifth section











// fourth section

function FourthSectionImageBlock() {
    const img = document.createElement("img");
    img.src = "./images/promo.png";

    img.classList.add("fsimage");

    return img;
}

function FourthSectionTextBlock() {
    const container = document.createElement("div");

    container.classList.add("fourth-section-text-block");

    container.innerHTML = `
        <h2>looking for exclusive digital services?</h2>
        <p>Proin fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et
        porttitor. Integer non dapibus diam, ac eleifend lectus.</p>
        <button class="fsbtn">let's talk</button>
    `

    return container;
}

function FourthSection() {
    const container = document.createElement("div");

    container.classList.add("fourth-section");

    container.appendChild(FourthSectionTextBlock());
    container.appendChild(FourthSectionImageBlock());

    return container;
}
// fourth section








// third section
function ViewAll() {
    const container = document.createElement("div");

    container.classList.add("view-all");

    container.textContent = "view all services >"

    return container
}

function ThirdSectionTextBlock() {
    const container = document.createElement("div");

    container.classList.add("third-section-text-block");

    container.innerHTML = `
        <p class="third-section-p big">
            A brand for a company is like a reputation for a person. You
            earn reputation by trying
            to do hard things well.
        </p>

        <p class="third-section-p">
            Maecenas volutpat, diam enim sagittis quam, id
            porta quam. Sed id dolor consectetur fermentum
            volutpat nibh, accumsan purus. Lorem ipsum dolor
            sit semper amet, consectetur adipiscing elit. In
            maximus ligula metus pellentesque mattis.
        </p>

        <p class="third-section-p">
            Donec vel ultricies purus. Nam dictum sem, ipsum
            aliquam . Etiam sit amet fringilla lacus. Pelenteque
            suscipit ante at ullamcorper pulvinar neque portor.
            Integer lectus. Praesent sed nisi eleifend, fermetum
            orci amet, iaculis libero.
        </p>
    `

    return container;
}

function ThirdSectionTabList() {
    const container = document.createElement("ul");

    container.classList.add("tabList");

    container.innerHTML = `
        <li class="presentation">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="40px" height="40px" fill="black">
                 <path d="M266.3 48.3L232.5 73.6c-5.4 4-8.5 10.4-8.5 17.1v9.1c0 6.8 5.5 12.3 12.3 12.3c2.4 0 4.8-.7 6.8-2.1l41.8-27.9c2-1.3 4.4-2.1 6.8-2.1h1c6.2 0 11.3 5.1 11.3 11.3c0 3-1.2 5.9-3.3 8l-19.9 19.9c-5.8 5.8-12.9 10.2-20.7 12.8l-26.5 8.8c-5.8 1.9-9.6 7.3-9.6 13.4c0 3.7-1.5 7.3-4.1 10l-17.9 17.9c-6.4 6.4-9.9 15-9.9 24v4.3c0 16.4 13.6 29.7 29.9 29.7c11 0 21.2-6.2 26.1-16l4-8.1c2.4-4.8 7.4-7.9 12.8-7.9c4.5 0 8.7 2.1 11.4 5.7l16.3 21.7c2.1 2.9 5.5 4.5 9.1 4.5c8.4 0 13.9-8.9 10.1-16.4l-1.1-2.3c-3.5-7 0-15.5 7.5-18l21.2-7.1c7.6-2.5 12.7-9.6 12.7-17.6c0-10.3 8.3-18.6 18.6-18.6H400c8.8 0 16 7.2 16 16s-7.2 16-16 16H379.3c-7.2 0-14.2 2.9-19.3 8l-4.7 4.7c-2.1 2.1-3.3 5-3.3 8c0 6.2 5.1 11.3 11.3 11.3h11.3c6 0 11.8 2.4 16 6.6l6.5 6.5c1.8 1.8 2.8 4.3 2.8 6.8s-1 5-2.8 6.8l-7.5 7.5C386 262 384 266.9 384 272s2 10 5.7 13.7L408 304c10.2 10.2 24.1 16 38.6 16H454c6.5-20.2 10-41.7 10-64c0-111.4-87.6-202.4-197.7-207.7zm172 307.9c-3.7-2.6-8.2-4.1-13-4.1c-6 0-11.8-2.4-16-6.6L396 332c-7.7-7.7-18-12-28.9-12c-9.7 0-19.2-3.5-26.6-9.8L314 287.4c-11.6-9.9-26.4-15.4-41.7-15.4H251.4c-12.6 0-25 3.7-35.5 10.7L188.5 301c-17.8 11.9-28.5 31.9-28.5 53.3v3.2c0 17 6.7 33.3 18.7 45.3l16 16c8.5 8.5 20 13.3 32 13.3H248c13.3 0 24 10.7 24 24c0 2.5 .4 5 1.1 7.3c71.3-5.8 132.5-47.6 165.2-107.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM187.3 100.7c-6.2-6.2-16.4-6.2-22.6 0l-32 32c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l32-32c6.2-6.2 6.2-16.4 0-22.6z"/>
            </svg>

            <p>branding</p>
        </li>

        <li class="presentation">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="40px" height="40px" fill="black">
                <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/>
            </svg>

            <p>web design</p>
        </li>

        <li class="presentation">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="40px" height="40px" fill="black">
                <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/>
            </svg>

            <p>graphic design</p>
        </li>

        <li class="presentation">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="60px" height="60px" fill="black">
                <path d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
            </svg>

            <p>development</p>
        </li>

        <li class="presentation">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="40px" height="40px" fill="black">
                <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/>
            </svg>

            <p>photography</p>
        </li>
    `

    return container;
}

function ThirdSectionTitle() {
    const container = document.createElement("div");

    container.classList.add("third-section-title");

    container.textContent = "services";

    return container;
}

function ThirdSection() {
    const container = document.createElement("section");

    container.classList.add("third-section");

    container.appendChild(ThirdSectionTitle());
    container.appendChild(ThirdSectionTabList());
    container.appendChild(ThirdSectionTextBlock());
    container.appendChild(ViewAll());

    return container;
}
// third section










// second section
function RowThirdDescription() {
    const container = document.createElement("span");

    container.classList.add("row-block-text");

    container.textContent = `
    Etiam sit amet fringilla lacus. Pellentesque
    suscippiteme ante at ullamcorper pulvinar neque
    porttitor. Integer lectus. Praesent sed nisi eleifend,
    fermentum orci amet, iaculis libero. Donec vel
    ultricies purus. Nam dictum sem, eu aliquam`

    return container;
}

function RowSecondDescription() {
    const container = document.createElement("span");

    container.classList.add("row-block-text");

    container.textContent = `
    Lorem ipsum dolor sit amet, consectetur adipiscing 
    elit. In maximus ligula semper metus pellentesque
    mattis. Maecenas volutpat, diam enim sagittis
    quam, id porta quam. Sed id dolor consectetur
    fermentum nibh volutpat, accumsan purus.`

    return container;
}

function ProgressDescriptionThird() {
    const container = document.createElement("span");

    container.classList.add("progress-description-third");
    container.textContent = "development. %";

    return container;
}

function ProgressDescriptionSecond() {
    const container = document.createElement("span");

    container.classList.add("progress-description-second");
    container.textContent = "design. %";

    return container;
}

function PorgressDescription() {
    const container = document.createElement("span");
    container.classList.add("progress-description");

    container.textContent = "branding. %"

    return container;
}

function ProgressLine() {
    const container = document.createElement("div");

    container.classList.add("progress-line");

    const progressBlockFirst = document.createElement("div");
    progressBlockFirst.classList.add("progress-first-line");

    const progressBlockSecond = document.createElement("div");
    progressBlockSecond.classList.add("progress-second-line");

    container.appendChild(progressBlockFirst);
    container.appendChild(progressBlockSecond);

    return container;
}

function RowThird() {
    const container = document.createElement("div");
    container.classList.add("row-blocks");

    container.appendChild(RowThirdDescription());

    return container;
}

function RowSecond() {
    const container = document.createElement("div");
    container.classList.add("row-blocks");

    container.appendChild(RowSecondDescription());

    return container;
}

function RowFirst() {
    const container = document.createElement("div");
    container.classList.add("row-blocks");

    container.appendChild(ProgressLine());
    container.appendChild(PorgressDescription());

    container.appendChild(ProgressLine());
    container.appendChild(ProgressDescriptionSecond());

    container.appendChild(ProgressLine());
    container.appendChild(ProgressDescriptionThird());
    

    return container;
}

function Row() {
    const container = document.createElement("div");

    container.classList.add("row");

    container.appendChild(RowFirst());
    container.appendChild(RowSecond());
    container.appendChild(RowThird());

    return container;
}

function SecondSectionTitle() {
    const container = document.createElement("h2");

    container.classList.add("second-section-title");

    container.textContent = "about studio";

    const a = document.createElement("a");
    a.classList.add("second-section-link");
    a.textContent = "more about us >";

    container.appendChild(a);

    return container;
}

function About() {
    const container = document.createElement("div");

    container.classList.add("about-container");

    container.appendChild(SecondSectionTitle());
    container.appendChild(Row());

    return container;
}

function SecondSection() {
    const container = document.createElement("section");

    container.classList.add("second-section");

    container.appendChild(About());

    return container;
}

// second section










// first section

function SecondText() {
    const container = document.createElement("div");

    container.classList.add("second-line");

    container.textContent = "Extraordinary art studio & creative minimalism lovers";

    return container;
}

function FirstText() {
    const container = document.createElement("div");

    container.classList.add("first-line");

    container.textContent = "thomas rythm";

    return container;
}

function Animations() {
    const header = document.querySelector(".header-wrap");
    const burger = document.querySelector(".burger-wrap-block");

    if(scrollY >= 120) {
        header.classList.add("fixed");
        burger.style.marginTop = "80px";
    } else {
        header.classList.remove("fixed");
        burger.style.marginTop = "0px";
    }
}


function BurgerWrap() {
    const container = document.createElement("div");
    container.classList.add("burger-wrap-block");

    container.innerHTML = `
        <div class="items home">home
            <div class="round">▼</div>
        </div>

        <div class="items">pages
            <div class="round">▼</div>
        </div>

        <div class="items">elements
            <div class="round">▼</div>
        </div>

        <div class="items">portfolio
            <div class="round">▼</div>
        </div>


        <div class="items">blog
            <div class="round">▼</div>
        </div>

        <div class="items">shop
            <div class="round">▼</div>
        </div>

        <div class="items"></div>

        <div class="items">rate us
            <div class="round">▼</div>
        </div>

        <div class="items">join us
            <div class="round">▼</div>
        </div>
    `
    return container;
}

function BurgerMenu() {
    const container = document.createElement("div");
    container.classList.add("burger-wrap");

    container.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="100%" height="100%" fill="white"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
    `

    container.addEventListener("click", (e) => {
        const burgerBlock = document.querySelector(".burger-wrap-block");
        burgerBlock.classList.toggle("burger-wrap-list");
    })

    return container;
}

function ScrollButton() {
    const container = document.createElement("div");

    container.classList.add("scroll-btn");

    container.innerHTML =  `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="100%" height="100%" fill="white">
        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
    </svg>
    `;

    container.addEventListener("click", () => {
        window.scroll({
            top: document.body.scrollHeight || document.documentElement.scrollHeight,
            behavior: 'smooth'
          });
    });

    return container;
}

function Navigation() {
    const container = document.createElement("ul");
    container.classList.add("navigation-wrap");

    container.innerHTML = `
        <li>Home ▼</li>
        <li>Pages ▼</li>
        <li>Elements ▼</li>
        <li>Portfolio ▼</li>
        <li>Blog ▼</li>
        <li>Shop ▼</li>
        <span>   </span>

        <li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="8px" height="8px" fill="white">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
        </svg> 
        Search
        </li>

        <li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="8px" height="8px" fill="white">
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
        </svg>
        Cart(0)
        </li>

        <li>Eng ▼</li>
    `

    const forEach = container.querySelectorAll("li");

    forEach.forEach((items) => {
        items.style.listStyleType = "none";
        items.style.color = "#ffffffb3";
        items.style.cursor = "pointer";
    });

    return container;
}

function Logo() {
    const container = document.createElement("div");
    container.classList.add("logo");
    container.style.backgroundImage = `url("./images/logo-white.png")`;
    container.style.backgroundSize = "100%";
    container.style.backgroundRepeat = "no-repeat";

    return container;
}

function Header() {
    const container = document.createElement("div");
    container.classList.add("header-wrap");

    container.appendChild(Logo());
    container.appendChild(Navigation());
    container.appendChild(BurgerMenu());

    return container;
}

function FirstSection() {
    const container = document.createElement("section");
    container.classList.add("first-section");

    container.appendChild(Header());
    container.appendChild(BurgerWrap());
    container.appendChild(FirstText());
    container.appendChild(SecondText());
    container.appendChild(ScrollButton());

    return container;
}

function FirstBackground() {
    const backgroundImage = document.createElement("div");
    backgroundImage.classList.add("first-section-bg");

    backgroundImage.appendChild(FirstSection());


    return backgroundImage;
}

// first section


root.appendChild(FirstBackground());
root.appendChild(SecondSection());
root.appendChild(ThirdSection());
root.appendChild(FourthSection());
root.appendChild(FifthSection());
root.appendChild(SixthSection());
root.appendChild(WiewPortfolio());
root.appendChild(SeventhSection());
root.appendChild(EightSection());
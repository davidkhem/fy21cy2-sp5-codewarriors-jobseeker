// define variables

const btn = document.querySelector('#btn');
// const job = document.querySelector('#job');
const city = document.querySelector('#location');

const form = document.querySelector('#form');

const API_KEY = 'f3949be83bb6df9c8ce6f1ed94bd50a4';
const API_URL = 'https://api.adzuna.com/v1/api/jobs/us/search/10?app_id=aed6ce79&app_key=f3949be83bb6df9c8ce6f1ed94bd50a4&results_per_page=50&title_only=software%20engineer';

// Testing another way to grab data from API
// const apiValue = 'result.json';

// console.log(apiValue)

// fetch(apiValue) // my promise
//     .then(response => response.json())
//     .then(item => {
//         console.log(item.value); // kept getting undefined when checking log
//     });


// API
const result = [
    {
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjMyMTQ5MTI0OSIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.McnIHVHXITKqVJTAjxtut8Ylo4042_GjPhFxpg3XPNA",
        "__CLASS__": "Adzuna::API::Response::Job",
        "description": "Introduction Software Developers at IBM are the backbone of our strategic initiatives to design, code, test, and provide industry-leading solutions that make the world run today - planes and trains take off on time, bank transactions complete in the blink of an eye and the world remains safe because of the work our software developers do. Whether you are working on projects internally or for a client, software development is critical to the success of IBM and our clients worldwide. At IBM, you …",
        "salary_is_predicted": "0",
        "created": "2021-07-15T23:53:00Z",
        "longitude": -71.106164,
        "id": "2321491249",
        "location": {
            "__CLASS__": "Adzuna::API::Response::Location",
            "area": [
                "US",
                "Massachusetts",
                "Middlesex County",
                "Medford"
            ],
            "display_name": "Medford, Middlesex County"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2321491249?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=5899048DB64061882D5140C4C0D3978D9F8918B0",
        "company": {
            "display_name": "IBM",
            "__CLASS__": "Adzuna::API::Response::Company"
        },
        "category": {
            "label": "IT Jobs",
            "tag": "it-jobs",
            "__CLASS__": "Adzuna::API::Response::Category"
        },
        "title": "Research <strong>Software</strong> <strong>Engineer</strong>",
        "latitude": 42.41843
    },
    {
        "__CLASS__": "Adzuna::API::Response::Job",
        "salary_is_predicted": "0",
        "description": "Introduction Software Developers at IBM are the backbone of our strategic initiatives to design, code, test, and provide industry-leading solutions that make the world run today - planes and trains take off on time, bank transactions complete in the blink of an eye and the world remains safe because of the work our software developers do. Whether you are working on projects internally or for a client, software development is critical to the success of IBM and our clients worldwide. At IBM, you …",
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjMyMTQ5MTIyNSIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.89oHVSBkwW8Vg-txkWkH1NrUAcaLdDLDn2xjITB_8ew",
        "redirect_url": "https://www.adzuna.com/land/ad/2321491225?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=4012BA7EA4B42202C5164ACB984FFCC726C52837",
        "company": {
            "display_name": "IBM",
            "__CLASS__": "Adzuna::API::Response::Company"
        },
        "location": {
            "area": [
                "US",
                "Massachusetts",
                "Middlesex County",
                "Arlington"
            ],
            "display_name": "Arlington, Middlesex County",
            "__CLASS__": "Adzuna::API::Response::Location"
        },
        "latitude": 42.423216,
        "category": {
            "label": "IT Jobs",
            "tag": "it-jobs",
            "__CLASS__": "Adzuna::API::Response::Category"
        },
        "title": "AI <strong>Software</strong> <strong>Engineer</strong>",
        "longitude": -71.153764,
        "created": "2021-07-15T23:52:59Z",
        "id": "2321491225"
    },
    {
        "company": {
            "display_name": "IBM",
            "__CLASS__": "Adzuna::API::Response::Company"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2321491158?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=C76AD2E48C4414B81B4B9E96203AE16EAC8147F6",
        "location": {
            "area": [
                "US",
                "Massachusetts",
                "Suffolk County",
                "Chelsea"
            ],
            "display_name": "Chelsea, Suffolk County",
            "__CLASS__": "Adzuna::API::Response::Location"
        },
        "latitude": 42.391764,
        "title": "AI <strong>Software</strong> <strong>Engineer</strong>",
        "category": {
            "label": "IT Jobs",
            "__CLASS__": "Adzuna::API::Response::Category",
            "tag": "it-jobs"
        },
        "longitude": -71.032828,
        "created": "2021-07-15T23:52:51Z",
        "id": "2321491158",
        "__CLASS__": "Adzuna::API::Response::Job",
        "salary_is_predicted": "0",
        "description": "Introduction Software Developers at IBM are the backbone of our strategic initiatives to design, code, test, and provide industry-leading solutions that make the world run today - planes and trains take off on time, bank transactions complete in the blink of an eye and the world remains safe because of the work our software developers do. Whether you are working on projects internally or for a client, software development is critical to the success of IBM and our clients worldwide. At IBM, you …",
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjMyMTQ5MTE1OCIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.gDCCYaxkU3L8mGJLx0TzG7ZzDysclX3lOLJwX7pP-ek"
    },
    {
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiR01UUzUwVHI2eEc5Z0JYV1dvQk1nZyIsImkiOiIyMzIxNDkxMjIzIn0.SpxTC36R3IRu-QS28B7ZTH09fVzc1jF6aRM1SJyQ31k",
        "__CLASS__": "Adzuna::API::Response::Job",
        "salary_is_predicted": "0",
        "description": "Introduction Software Developers at IBM are the backbone of our strategic initiatives to design, code, test, and provide industry-leading solutions that make the world run today - planes and trains take off on time, bank transactions complete in the blink of an eye and the world remains safe because of the work our software developers do. Whether you are working on projects internally or for a client, software development is critical to the success of IBM and our clients worldwide. At IBM, you …",
        "longitude": -71.053663,
        "created": "2021-07-15T23:52:59Z",
        "id": "2321491223",
        "redirect_url": "https://www.adzuna.com/land/ad/2321491223?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=76B2789E120529629D56849A9AC577B9B11E14D3",
        "company": {
            "display_name": "IBM",
            "__CLASS__": "Adzuna::API::Response::Company"
        },
        "location": {
            "display_name": "Everett, Middlesex County",
            "area": [
                "US",
                "Massachusetts",
                "Middlesex County",
                "Everett"
            ],
            "__CLASS__": "Adzuna::API::Response::Location"
        },
        "latitude": 42.40843,
        "title": "AI <strong>Software</strong> <strong>Engineer</strong>",
        "category": {
            "label": "IT Jobs",
            "__CLASS__": "Adzuna::API::Response::Category",
            "tag": "it-jobs"
        }
    },
    {
        "salary_is_predicted": "0",
        "description": "The Job Responsibilities This position will be responsible to design, implement, test, and release software modules in compliance with the product requirements specification and the product quality standards. Work within a team of engineers and test personnel to produce high quality deliverables during the design, implementation, integration, test and support phases of patient monitoring product development. Specifically, with minimal supervision, shows the ability to diagnose, debug and resolv…",
        "__CLASS__": "Adzuna::API::Response::Job",
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjMwMDE3NDgwNiIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.5mh1HDkccFsw_lgUSiKBHMhA2N4BCN9yN6_ULa0sDPA",
        "latitude": 42.658425,
        "category": {
            "label": "Engineering Jobs",
            "tag": "engineering-jobs",
            "__CLASS__": "Adzuna::API::Response::Category"
        },
        "title": "<strong>Software</strong> <strong>Engineer</strong> II",
        "company": {
            "display_name": "Draeger Medical Systems, Inc.",
            "__CLASS__": "Adzuna::API::Response::Company"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2300174806?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=1F5D3269D37E28584CA2EC4F3475A1CA9DCE497D",
        "location": {
            "__CLASS__": "Adzuna::API::Response::Location",
            "area": [
                "US",
                "Massachusetts",
                "Essex County",
                "Andover"
            ],
            "display_name": "Andover, Essex County"
        },
        "id": "2300174806",
        "created": "2021-07-05T06:36:15Z",
        "longitude": -71.137001
    },
    {
        "salary_is_predicted": "0",
        "description": "Introduction Software Developers at IBM are the backbone of our strategic initiatives to design, code, test, and provide industry-leading solutions that make the world run today - planes and trains take off on time, bank transactions complete in the blink of an eye and the world remains safe because of the work our software developers do. Whether you are working on projects internally or for a client, software development is critical to the success of IBM and our clients worldwide. At IBM, you …",
        "__CLASS__": "Adzuna::API::Response::Job",
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjMyMjM5NDQ3MyIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.M48zxkhZk_hjIFDbFKl39TXAzkmB36uxSdZ-WSzp_vM",
        "latitude": 42.380327,
        "category": {
            "__CLASS__": "Adzuna::API::Response::Category",
            "tag": "it-jobs",
            "label": "IT Jobs"
        },
        "title": "AI <strong>Software</strong> <strong>Engineer</strong>",
        "company": {
            "display_name": "IBM",
            "__CLASS__": "Adzuna::API::Response::Company"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2322394473?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=FA431010F77D6D6C3D9D8F74F772760CE63EAA38",
        "location": {
            "display_name": "Cambridge, Middlesex County",
            "area": [
                "US",
                "Massachusetts",
                "Middlesex County",
                "Cambridge"
            ],
            "__CLASS__": "Adzuna::API::Response::Location"
        },
        "id": "2322394473",
        "longitude": -71.13891,
        "created": "2021-07-16T10:41:45Z"
    },
    {
        "id": "2321491251",
        "longitude": -71.182832,
        "created": "2021-07-15T23:53:00Z",
        "latitude": 42.37093,
        "title": "Research <strong>Software</strong> <strong>Engineer</strong>",
        "category": {
            "__CLASS__": "Adzuna::API::Response::Category",
            "tag": "it-jobs",
            "label": "IT Jobs"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2321491251?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=B2F3D89BE838D2268D74C3D836AFF464D63B3050",
        "company": {
            "__CLASS__": "Adzuna::API::Response::Company",
            "display_name": "IBM"
        },
        "location": {
            "__CLASS__": "Adzuna::API::Response::Location",
            "area": [
                "US",
                "Massachusetts",
                "Middlesex County",
                "Watertown"
            ],
            "display_name": "Watertown, Middlesex County"
        },
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiR01UUzUwVHI2eEc5Z0JYV1dvQk1nZyIsImkiOiIyMzIxNDkxMjUxIn0.jDEVAPa5VbnehIChXQv8PptcY12rfPxWdKD-qBazUBw",
        "salary_is_predicted": "0",
        "description": "Introduction Software Developers at IBM are the backbone of our strategic initiatives to design, code, test, and provide industry-leading solutions that make the world run today - planes and trains take off on time, bank transactions complete in the blink of an eye and the world remains safe because of the work our software developers do. Whether you are working on projects internally or for a client, software development is critical to the success of IBM and our clients worldwide. At IBM, you …",
        "__CLASS__": "Adzuna::API::Response::Job"
    },
    {
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiR01UUzUwVHI2eEc5Z0JYV1dvQk1nZyIsImkiOiIyMzAwMTc0OTM5In0.S55pPN8z5DrbOi24gMhZHTiz2OPVWYh4tqZQo-s0psQ",
        "__CLASS__": "Adzuna::API::Response::Job",
        "description": "The Job Responsibilities Within the global Medical Platform Organization, you are joining a development team to develop platform-based software for medical devices and clinical systems. These complex, highly heterogeneous and distributed system of devices and systems will support our customers to save lives, improve patient outcome and streamline clinical workflows in hospitals. You will design, implement and test the underlying communication protocol to enable system and medical device interop…",
        "salary_is_predicted": "0",
        "created": "2021-07-05T06:36:24Z",
        "longitude": -71.137001,
        "id": "2300174939",
        "location": {
            "__CLASS__": "Adzuna::API::Response::Location",
            "area": [
                "US",
                "Massachusetts",
                "Essex County",
                "Andover"
            ],
            "display_name": "Andover, Essex County"
        },
        "company": {
            "display_name": "Draeger Medical Systems, Inc.",
            "__CLASS__": "Adzuna::API::Response::Company"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2300174939?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=1D9F41D03AAFBC0D8AE9290EE66F4497044C7EC8",
        "category": {
            "label": "Engineering Jobs",
            "tag": "engineering-jobs",
            "__CLASS__": "Adzuna::API::Response::Category"
        },
        "title": "<strong>Software</strong> <strong>Engineer</strong> I",
        "latitude": 42.658425
    },
    {
        "longitude": -70.847671,
        "created": "2021-07-13T12:11:55Z",
        "id": "2315652956",
        "company": {
            "display_name": "American Renal Associates",
            "__CLASS__": "Adzuna::API::Response::Company"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2315652956?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=137A4BD851800FAC7962FBD49DD3D61CD5EE60E6",
        "location": {
            "display_name": "Beverly, Essex County",
            "area": [
                "US",
                "Massachusetts",
                "Essex County",
                "Beverly"
            ],
            "__CLASS__": "Adzuna::API::Response::Location"
        },
        "latitude": 42.572058,
        "category": {
            "label": "IT Jobs",
            "tag": "it-jobs",
            "__CLASS__": "Adzuna::API::Response::Category"
        },
        "title": "Senior <strong>Software</strong> <strong>Engineer</strong>",
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjMxNTY1Mjk1NiIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.v3nVyAYDS2p9to3j77p36pwm_k2OWA3VwSu5VIb9h2s",
        "__CLASS__": "Adzuna::API::Response::Job",
        "salary_is_predicted": "0",
        "description": "American Renal Associates, a national provider of quality dialysis services, is experiencing rapid growth and we are searching for the right individuals to help continue our superb performance. We are currently accepting applications for the following position in our Corporate Headquarters, located at the modern and convenient Cummings Center in Beverly, MA: Senior Software Engineer The Senior Software Engineer role is responsible for the creation and maintenance of web-based software applicati…"
    },
    {
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjMwODQ0MzQ5NSIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.1jUov9L8ZWpdhMV1ncoLcNk2uKXNZl72rLYT6sG5a_o",
        "__CLASS__": "Adzuna::API::Response::Job",
        "description": "Senior Software Engineer ClinEco, a division of Cambridge Innovation Institute, is building a web platform for the clinical trials industry that will make trials faster and cheaper, and ultimately will help patients receive the innovative therapies they need. We are hiring aSenior Software Engineer whowill work closely with the management team and scientific advisors to design and implement the features of the platform. The product is a web-based community and a B2B marketplace that enables acc…",
        "salary_is_predicted": "0",
        "created": "2021-07-09T11:54:52Z",
        "longitude": -71.245844,
        "id": "2308443495",
        "location": {
            "area": [
                "US",
                "Massachusetts",
                "Norfolk County",
                "Needham"
            ],
            "display_name": "Needham, Norfolk County",
            "__CLASS__": "Adzuna::API::Response::Location"
        },
        "company": {
            "display_name": "Cambridge Innovation Institute",
            "__CLASS__": "Adzuna::API::Response::Company"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2308443495?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=F831D34F476A2A92D0E272B673FA97E0D6889C36",
        "category": {
            "__CLASS__": "Adzuna::API::Response::Category",
            "tag": "engineering-jobs",
            "label": "Engineering Jobs"
        },
        "title": "Senior <strong>Software</strong> <strong>Engineer</strong>",
        "latitude": 42.274802
    },
    {
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjMyMTQ5MTMyNCIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.brYaF2BxEWW_8dBIemSEKx5ZvmkiAxijGSm34tlaTrk",
        "salary_is_predicted": "0",
        "description": "Introduction Software Developers at IBM are the backbone of our strategic initiatives to design, code, test, and provide industry-leading solutions that make the world run today - planes and trains take off on time, bank transactions complete in the blink of an eye and the world remains safe because of the work our software developers do. Whether you are working on projects internally or for a client, software development is critical to the success of IBM and our clients worldwide. At IBM, you …",
        "__CLASS__": "Adzuna::API::Response::Job",
        "id": "2321491324",
        "created": "2021-07-15T23:53:06Z",
        "longitude": -71.032828,
        "latitude": 42.391764,
        "title": "Research <strong>Software</strong> <strong>Engineer</strong>",
        "category": {
            "__CLASS__": "Adzuna::API::Response::Category",
            "tag": "it-jobs",
            "label": "IT Jobs"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2321491324?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=C0E6330081E2E50284BECA2AC74B8C238F0308FF",
        "company": {
            "display_name": "IBM",
            "__CLASS__": "Adzuna::API::Response::Company"
        },
        "location": {
            "__CLASS__": "Adzuna::API::Response::Location",
            "display_name": "Chelsea, Suffolk County",
            "area": [
                "US",
                "Massachusetts",
                "Suffolk County",
                "Chelsea"
            ]
        }
    },
    {
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjMyMTQ5MTM1NCIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.pVJnMuAB1cUpN9njb94zYQsTq0ghhNcgsNinNhRFza0",
        "__CLASS__": "Adzuna::API::Response::Job",
        "salary_is_predicted": "0",
        "description": "Introduction Software Developers at IBM are the backbone of our strategic initiatives to design, code, test, and provide industry-leading solutions that make the world run today - planes and trains take off on time, bank transactions complete in the blink of an eye and the world remains safe because of the work our software developers do. Whether you are working on projects internally or for a client, software development is critical to the success of IBM and our clients worldwide. At IBM, you …",
        "longitude": -71.066163,
        "created": "2021-07-15T23:53:09Z",
        "id": "2321491354",
        "company": {
            "__CLASS__": "Adzuna::API::Response::Company",
            "display_name": "IBM"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2321491354?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=5EA8EDD0B6937A3AD85EBE29FE4F5E4315A90FB6",
        "location": {
            "__CLASS__": "Adzuna::API::Response::Location",
            "display_name": "Malden, Middlesex County",
            "area": [
                "US",
                "Massachusetts",
                "Middlesex County",
                "Malden"
            ]
        },
        "latitude": 42.425096,
        "category": {
            "label": "IT Jobs",
            "tag": "it-jobs",
            "__CLASS__": "Adzuna::API::Response::Category"
        },
        "title": "Research <strong>Software</strong> <strong>Engineer</strong>"
    },
    {
        "location": {
            "area": [
                "US",
                "Massachusetts",
                "Middlesex County",
                "Carlisle"
            ],
            "display_name": "Carlisle, Middlesex County",
            "__CLASS__": "Adzuna::API::Response::Location"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2272762692?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=86AB16AD382884C6D1FAAC1F475D40972B56F19B",
        "company": {
            "__CLASS__": "Adzuna::API::Response::Company",
            "display_name": "Assurance Technology Corporation"
        },
        "title": "Test <strong>Software</strong> <strong>Engineers</strong>",
        "category": {
            "__CLASS__": "Adzuna::API::Response::Category",
            "tag": "engineering-jobs",
            "label": "Engineering Jobs"
        },
        "latitude": 42.529167,
        "longitude": -71.35,
        "created": "2021-06-23T02:24:32Z",
        "id": "2272762692",
        "__CLASS__": "Adzuna::API::Response::Job",
        "description": "ATC is looking for early-/mid- career Software Engineers to develop and maintain test software used to integrate and validate advanced sensing systems. Qualifications: Bachelor’s Degree in Computer Science or Electrical Engineering 5-7 years of experience developing test software Strong Python background Proficiency with Linux build and runtime environments US citizen eligible for a security clearance Responsibilities: Design, develop and deploy software used to measure the performance of advan…",
        "salary_is_predicted": "0",
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjI3Mjc2MjY5MiIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.Of4GBJQDgdBaYltiLM02a7W3hXKL1YiKBKUMzyzRU5Y"
    },
    {
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjMzNTMxMDE4MCIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.kOcM1nbnnF-GohC9W796flLubjfkanD-uTzm_M6zX0U",
        "__CLASS__": "Adzuna::API::Response::Job",
        "description": "Join Hired and find your dream job as a Software Engineer at one of 10,000 companies looking for candidates just like you.Companies on Hired apply to you You'll receive salary and compensation details up front - before the interview. By joining Hired, we're confident that you'll find a job you'll loveSoftware Engineers continue to be one of the most exciting and sought after developer jobs available. Engineers code websites or applications on both the server and the user-facing side. It is a ro…",
        "salary_is_predicted": "0",
        "longitude": -72.36028,
        "created": "2021-07-22T09:50:44Z",
        "id": "2335310180",
        "location": {
            "__CLASS__": "Adzuna::API::Response::Location",
            "area": [
                "US",
                "Massachusetts",
                "Franklin County",
                "Wendell Depot"
            ],
            "display_name": "Wendell Depot, Franklin County"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2335310180?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=D0EAFB1C9486D9482A1CF5C0D0B4E3DFF600DDB6",
        "company": {
            "display_name": "Hired",
            "__CLASS__": "Adzuna::API::Response::Company"
        },
        "title": "<strong>Software</strong> <strong>Engineer</strong> - Remote",
        "category": {
            "tag": "it-jobs",
            "__CLASS__": "Adzuna::API::Response::Category",
            "label": "IT Jobs"
        },
        "latitude": 42.59583
    },
    {
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiR01UUzUwVHI2eEc5Z0JYV1dvQk1nZyIsImkiOiIyMzM0NDQyODY3In0.LvSKszgxkMKWMwc0w5oilIpGGdZNA8Cphx99-E0GRZI",
        "__CLASS__": "Adzuna::API::Response::Job",
        "salary_is_predicted": "0",
        "description": "Join Hired and find your dream job as a Software Engineer at one of 10,000 companies looking for candidates just like you.Companies on Hired apply to you You'll receive salary and compensation details up front - before the interview. By joining Hired, we're confident that you'll find a job you'll loveSoftware Engineers continue to be one of the most exciting and sought after developer jobs available. Engineers code websites or applications on both the server and the user-facing side. It is a ro…",
        "longitude": -70.627628,
        "created": "2021-07-21T22:56:19Z",
        "id": "2334442867",
        "company": {
            "__CLASS__": "Adzuna::API::Response::Company",
            "display_name": "Hired"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2334442867?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=B48E507F1D2E525D970C5560C35D60DD40844295",
        "location": {
            "display_name": "Falmouth, Barnstable County",
            "area": [
                "US",
                "Massachusetts",
                "Barnstable County",
                "Falmouth"
            ],
            "__CLASS__": "Adzuna::API::Response::Location"
        },
        "latitude": 41.575025,
        "category": {
            "__CLASS__": "Adzuna::API::Response::Category",
            "tag": "it-jobs",
            "label": "IT Jobs"
        },
        "title": "<strong>Software</strong> <strong>Engineer</strong> - Remote"
    },
    {
        "id": "2336286658",
        "created": "2021-07-22T18:26:58Z",
        "longitude": -71.516305,
        "category": {
            "tag": "it-jobs",
            "__CLASS__": "Adzuna::API::Response::Category",
            "label": "IT Jobs"
        },
        "title": "<strong>Software</strong> <strong>Engineer</strong> - Remote",
        "latitude": 42.139858,
        "location": {
            "__CLASS__": "Adzuna::API::Response::Location",
            "display_name": "Milford, Worcester County",
            "area": [
                "US",
                "Massachusetts",
                "Worcester County",
                "Milford"
            ]
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2336286658?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=6B9F008090E5AFFE82FDADAF2CE1CE0D4B704E24",
        "company": {
            "__CLASS__": "Adzuna::API::Response::Company",
            "display_name": "Hired"
        },
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiR01UUzUwVHI2eEc5Z0JYV1dvQk1nZyIsImkiOiIyMzM2Mjg2NjU4In0.7d7TNnVvxujV4tnDul5lQpSrGg1WtrwfJzkw5nAfqxA",
        "description": "Join Hired and find your dream job as a Software Engineer at one of 10,000 companies looking for candidates just like you.Companies on Hired apply to you You'll receive salary and compensation details up front - before the interview. By joining Hired, we're confident that you'll find a job you'll loveSoftware Engineers continue to be one of the most exciting and sought after developer jobs available. Engineers code websites or applications on both the server and the user-facing side. It is a ro…",
        "salary_is_predicted": "0",
        "__CLASS__": "Adzuna::API::Response::Job"
    },
    {
        "__CLASS__": "Adzuna::API::Response::Job",
        "description": "Join Hired and find your dream job as a Software Engineer at one of 10,000 companies looking for candidates just like you.Companies on Hired apply to you You'll receive salary and compensation details up front - before the interview. By joining Hired, we're confident that you'll find a job you'll loveSoftware Engineers continue to be one of the most exciting and sought after developer jobs available. Engineers code websites or applications on both the server and the user-facing side. It is a ro…",
        "salary_is_predicted": "0",
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiR01UUzUwVHI2eEc5Z0JYV1dvQk1nZyIsImkiOiIyMzM2MzMzNzUzIn0.pHG-lhgCj-39XykfHBvSdJUNqtWR6O2WUKFshbMyeFQ",
        "location": {
            "display_name": "Wareham, Plymouth County",
            "area": [
                "US",
                "Massachusetts",
                "Plymouth County",
                "Wareham"
            ],
            "__CLASS__": "Adzuna::API::Response::Location"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2336333753?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=C46FE7CC40750418823B8E2A090590826E5860BF",
        "company": {
            "__CLASS__": "Adzuna::API::Response::Company",
            "display_name": "Hired"
        },
        "title": "<strong>Software</strong> <strong>Engineer</strong> - Remote",
        "category": {
            "label": "IT Jobs",
            "__CLASS__": "Adzuna::API::Response::Category",
            "tag": "it-jobs"
        },
        "latitude": 41.766258,
        "created": "2021-07-22T18:30:51Z",
        "longitude": -70.704952,
        "id": "2336333753"
    },
    {
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjMzMjc5MjgwMiIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.BtAV_unFRiGyl63MSMEz8gr61qvQgdS-HutnE9OnfCg",
        "__CLASS__": "Adzuna::API::Response::Job",
        "description": "About Us: At Raytheon Missiles & Defense, by combining our vast resources and investments, we are able to dedicate ourselves to solving mission-level vs. product-level customer challenges  together we can anticipate more, move faster and make a bigger impact on the big picture. Job Summary: Are you interested in joining a community of diverse, dynamic, professional engineers? Are you a Software Engineer who is looking for an opportunity to work in a collaborative environment which is character…",
        "salary_is_predicted": "0",
        "longitude": -71.156492,
        "created": "2021-07-21T08:40:45Z",
        "id": "2332792802",
        "location": {
            "__CLASS__": "Adzuna::API::Response::Location",
            "display_name": "Somerset, Bristol County",
            "area": [
                "US",
                "Massachusetts",
                "Bristol County",
                "Somerset"
            ]
        },
        "company": {
            "__CLASS__": "Adzuna::API::Response::Company",
            "display_name": "RTX"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2332792802?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=AE31B53C1C85FAC4FC402033C654C720625C2535",
        "title": "Principal C++ <strong>Software</strong> <strong>Engineer</strong>",
        "category": {
            "label": "IT Jobs",
            "__CLASS__": "Adzuna::API::Response::Category",
            "tag": "it-jobs"
        },
        "latitude": 41.685783
    },
    {
        "__CLASS__": "Adzuna::API::Response::Job",
        "salary_is_predicted": "0",
        "description": "About Us : At Raytheon Missiles & Defense, by combining our vast resources and investments we are able to dedicate ourselves to solving mission-level vs. product-level customer challenges  together we can anticipate more, move faster and make a bigger impact on the big picture. The Global Radar Software Products Departments mission is to provide world class Radar Software to be used in military systems deployed at sea and on land. Our software teams employ an Agile Scrum process to rapidly des…",
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjMzMjc5MjA3MyIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.aHlyuTa7Bb58w9tHxb42Ml-5GTUbO00HE1gmR947bnE",
        "redirect_url": "https://www.adzuna.com/land/ad/2332792073?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=2FC21F69F3BDCDD7D762C3C0E5A440962A580303",
        "company": {
            "display_name": "RTX",
            "__CLASS__": "Adzuna::API::Response::Company"
        },
        "location": {
            "__CLASS__": "Adzuna::API::Response::Location",
            "display_name": "Roxbury Crossing, Suffolk County",
            "area": [
                "US",
                "Massachusetts",
                "Suffolk County",
                "Roxbury Crossing"
            ]
        },
        "latitude": 42.3333,
        "title": "Sr. C++ <strong>Software</strong> <strong>Engineer</strong> - DSP",
        "category": {
            "tag": "it-jobs",
            "__CLASS__": "Adzuna::API::Response::Category",
            "label": "IT Jobs"
        },
        "longitude": -71.09694,
        "created": "2021-07-21T08:40:26Z",
        "id": "2332792073"
    },
    {
        "created": "2021-07-21T08:40:26Z",
        "longitude": -71.97858,
        "id": "2332792079",
        "location": {
            "__CLASS__": "Adzuna::API::Response::Location",
            "area": [
                "US",
                "Massachusetts",
                "Worcester County",
                "Charlton Depot"
            ],
            "display_name": "Charlton Depot, Worcester County"
        },
        "company": {
            "display_name": "RTX",
            "__CLASS__": "Adzuna::API::Response::Company"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2332792079?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=A3C59680C5D947D9977D085FA78085F66DF81024",
        "category": {
            "label": "IT Jobs",
            "__CLASS__": "Adzuna::API::Response::Category",
            "tag": "it-jobs"
        },
        "title": "Sr. C++ <strong>Software</strong> <strong>Engineer</strong> - DSP",
        "latitude": 42.17336,
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjMzMjc5MjA3OSIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.lpUaKXgUM6vc9e4iy1VDJxmc2OmMv4pGUKizPArk2VU",
        "__CLASS__": "Adzuna::API::Response::Job",
        "description": "About Us : At Raytheon Missiles & Defense, by combining our vast resources and investments we are able to dedicate ourselves to solving mission-level vs. product-level customer challenges  together we can anticipate more, move faster and make a bigger impact on the big picture. The Global Radar Software Products Departments mission is to provide world class Radar Software to be used in military systems deployed at sea and on land. Our software teams employ an Agile Scrum process to rapidly des…",
        "salary_is_predicted": "0"
    },
    {
        "longitude": -71.55024,
        "created": "2021-07-21T08:40:38Z",
        "id": "2332792401",
        "location": {
            "area": [
                "US",
                "Massachusetts",
                "Middlesex County",
                "Marlborough"
            ],
            "display_name": "Marlborough, Middlesex County",
            "__CLASS__": "Adzuna::API::Response::Location"
        },
        "company": {
            "display_name": "RTX",
            "__CLASS__": "Adzuna::API::Response::Company"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2332792401?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=5F0A7CE87ACD3AC4BD340C0929FBA6381206DC1C",
        "title": "Sr. C++ <strong>Software</strong> <strong>Engineer</strong> - DSP",
        "category": {
            "__CLASS__": "Adzuna::API::Response::Category",
            "tag": "it-jobs",
            "label": "IT Jobs"
        },
        "latitude": 42.34674,
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiR01UUzUwVHI2eEc5Z0JYV1dvQk1nZyIsImkiOiIyMzMyNzkyNDAxIn0.owAtGAG-VUGBVtMEok7fX5Mks4Dz-YemqCZoBnMYWL4",
        "__CLASS__": "Adzuna::API::Response::Job",
        "description": "About Us : At Raytheon Missiles & Defense, by combining our vast resources and investments we are able to dedicate ourselves to solving mission-level vs. product-level customer challenges  together we can anticipate more, move faster and make a bigger impact on the big picture. The Global Radar Software Products Departments mission is to provide world class Radar Software to be used in military systems deployed at sea and on land. Our software teams employ an Agile Scrum process to rapidly des…",
        "salary_is_predicted": "0"
    },
    {
        "__CLASS__": "Adzuna::API::Response::Job",
        "description": "About Us : At Raytheon Missiles & Defense, by combining our vast resources and investments we are able to dedicate ourselves to solving mission-level vs. product-level customer challenges  together we can anticipate more, move faster and make a bigger impact on the big picture. The Global Radar Software Products Departments mission is to provide world class Radar Software to be used in military systems deployed at sea and on land. Our software teams employ an Agile Scrum process to rapidly des…",
        "salary_is_predicted": "0",
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjMzMjc5MjI5MSIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.eQPkmNPWIKZbLPSLyCMghKZdmX7c8qL_qAtivDDKJdE",
        "location": {
            "display_name": "Rutland, Worcester County",
            "area": [
                "US",
                "Massachusetts",
                "Worcester County",
                "Rutland"
            ],
            "__CLASS__": "Adzuna::API::Response::Location"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2332792291?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=6620CA4909D0A4410FEA0337392666BBB0C88693",
        "company": {
            "display_name": "RTX",
            "__CLASS__": "Adzuna::API::Response::Company"
        },
        "category": {
            "__CLASS__": "Adzuna::API::Response::Category",
            "tag": "it-jobs",
            "label": "IT Jobs"
        },
        "title": "Sr. C++ <strong>Software</strong> <strong>Engineer</strong> - DSP",
        "latitude": 42.374333,
        "created": "2021-07-21T08:40:35Z",
        "longitude": -71.952151,
        "id": "2332792291"
    },
    {
        "title": "<strong>Software</strong> <strong>Engineer</strong>",
        "category": {
            "label": "IT Jobs",
            "__CLASS__": "Adzuna::API::Response::Category",
            "tag": "it-jobs"
        },
        "latitude": 42.504716,
        "location": {
            "display_name": "Burlington, Middlesex County",
            "area": [
                "US",
                "Massachusetts",
                "Middlesex County",
                "Burlington"
            ],
            "__CLASS__": "Adzuna::API::Response::Location"
        },
        "company": {
            "__CLASS__": "Adzuna::API::Response::Company",
            "display_name": "Sefas North America"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2291294924?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=1E47D570C17D3E7F7B46A48A9D475DD750F9B0CF",
        "id": "2291294924",
        "created": "2021-06-30T19:11:02Z",
        "longitude": -71.195621,
        "description": "Company Summary Sefas Innovation is a leading supplier of enterprise solutions to generate, process, optimize and distribute omni-channel customer communications. Our suite of products and services help enterprises achieve their digital transformation by supporting the modernization of legacy applications or the development of new customer communications, across any channel. Our company delivers complex solutions and projects that are business-critical and have a deep impact on our clients. Add…",
        "salary_is_predicted": "0",
        "__CLASS__": "Adzuna::API::Response::Job",
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjI5MTI5NDkyNCIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.MdiduSBt_cX0BM3sb4eWBqyeFNMSUSVPBcbBEM1X9s0"
    },
    {
        "latitude": 42.354856,
        "title": "<strong>Software</strong> <strong>Engineer</strong>",
        "category": {
            "label": "IT Jobs",
            "tag": "it-jobs",
            "__CLASS__": "Adzuna::API::Response::Category"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2228519632?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=0348871AF90A7D34697954B95E37DD7ABE39C526",
        "company": {
            "__CLASS__": "Adzuna::API::Response::Company",
            "display_name": "Embark Veterinary"
        },
        "location": {
            "__CLASS__": "Adzuna::API::Response::Location",
            "area": [
                "US",
                "Massachusetts",
                "Suffolk County",
                "Boston"
            ],
            "display_name": "Boston, Suffolk County"
        },
        "id": "2228519632",
        "longitude": -71.066119,
        "created": "2021-06-03T23:59:57Z",
        "salary_is_predicted": "0",
        "description": "Who we are: Join Embark on our mission to improve the life and longevity of dogs everywhere. Our canine DNA test — the highest-rated, most accurate on the market — enables us to make scientific advances in personalized pet care. Recently named one of the fastest-growing private companies in America by Inc. Magazine, Embark is the only canine genetics company using research-grade technology, which allows us to make new scientific discoveries. Designed by world leaders in dog genetics in partners…",
        "__CLASS__": "Adzuna::API::Response::Job",
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiR01UUzUwVHI2eEc5Z0JYV1dvQk1nZyIsImkiOiIyMjI4NTE5NjMyIn0.KneeYhtXgSrjIRXAByErqKjiJZnA67pNFzDiVeSQcVE"
    },
    {
        "id": "2327436621",
        "created": "2021-07-18T22:01:27Z",
        "longitude": -71.283813,
        "category": {
            "__CLASS__": "Adzuna::API::Response::Category",
            "tag": "it-jobs",
            "label": "IT Jobs"
        },
        "title": "Manager <strong>Software</strong> <strong>Engineering</strong>(Remote)",
        "latitude": 42.237588,
        "location": {
            "__CLASS__": "Adzuna::API::Response::Location",
            "area": [
                "US",
                "Massachusetts",
                "Norfolk County",
                "Dover"
            ],
            "display_name": "Dover, Norfolk County"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2327436621?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=6F163D43DE254C9A14D2C3E861106CB65408B1D6",
        "company": {
            "__CLASS__": "Adzuna::API::Response::Company",
            "display_name": "Citizens"
        },
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiR01UUzUwVHI2eEc5Z0JYV1dvQk1nZyIsImkiOiIyMzI3NDM2NjIxIn0.CjY2PU0b-wBh-ptC2MaqLe9iz3kGmA4T7uqbNBdKD-w",
        "description": "Citizens Bank is seeking an experienced Software Engineering Manager to join our Consumer Technology team and be part of our technology and digital transformation journey. As a seasoned software engineering leader, you will work alongside and mentor a group of talented engineers as you pursue a broad range of initiatives from technology modernization and digital transformation leveraging cloud, big data, data science and CICD engineering. By leveraging your leadership and technical skills and t…",
        "salary_is_predicted": "0",
        "__CLASS__": "Adzuna::API::Response::Job"
    },
    {
        "id": "2327436606",
        "longitude": -71.531549,
        "created": "2021-07-18T22:01:27Z",
        "category": {
            "tag": "it-jobs",
            "__CLASS__": "Adzuna::API::Response::Category",
            "label": "IT Jobs"
        },
        "title": "Manager <strong>Software</strong> <strong>Engineering</strong>(Remote)",
        "latitude": 42.219595,
        "location": {
            "__CLASS__": "Adzuna::API::Response::Location",
            "area": [
                "US",
                "Massachusetts",
                "Middlesex County",
                "Hopkinton"
            ],
            "display_name": "Hopkinton, Middlesex County"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2327436606?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=2DD08AD24D0008E9F06A03448421619D1551BD19",
        "company": {
            "display_name": "Citizens",
            "__CLASS__": "Adzuna::API::Response::Company"
        },
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjMyNzQzNjYwNiIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.gSwQLveeWSMeLr37NmBgJGQZwh3_YJX2ZklAY2iddMU",
        "description": "Citizens Bank is seeking an experienced Software Engineering Manager to join our Consumer Technology team and be part of our technology and digital transformation journey. As a seasoned software engineering leader, you will work alongside and mentor a group of talented engineers as you pursue a broad range of initiatives from technology modernization and digital transformation leveraging cloud, big data, data science and CICD engineering. By leveraging your leadership and technical skills and t…",
        "salary_is_predicted": "0",
        "__CLASS__": "Adzuna::API::Response::Job"
    },
    {
        "description": "Citizens Bank is seeking an experienced Software Engineering Manager to join our Consumer Technology team and be part of our technology and digital transformation journey. As a seasoned software engineering leader, you will work alongside and mentor a group of talented engineers as you pursue a broad range of initiatives from technology modernization and digital transformation leveraging cloud, big data, data science and CICD engineering. By leveraging your leadership and technical skills and t…",
        "salary_is_predicted": "0",
        "__CLASS__": "Adzuna::API::Response::Job",
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiR01UUzUwVHI2eEc5Z0JYV1dvQk1nZyIsImkiOiIyMzI3NDM2OTY3In0.Pdoy5bDbsoA443e8SgcBySXX3Vn2G-8UZlaM7cjxj9c",
        "title": "Manager <strong>Software</strong> <strong>Engineering</strong>(Remote)",
        "category": {
            "label": "IT Jobs",
            "__CLASS__": "Adzuna::API::Response::Category",
            "tag": "it-jobs"
        },
        "latitude": 42.224913,
        "location": {
            "area": [
                "US",
                "Massachusetts",
                "Hampshire County",
                "Southampton"
            ],
            "display_name": "Southampton, Hampshire County",
            "__CLASS__": "Adzuna::API::Response::Location"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2327436967?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=AE46135774D0FBC47171C8F9A551FD22706194A3",
        "company": {
            "display_name": "Citizens",
            "__CLASS__": "Adzuna::API::Response::Company"
        },
        "id": "2327436967",
        "created": "2021-07-18T22:01:44Z",
        "longitude": -72.724784
    },
    {
        "id": "2334991199",
        "longitude": -71.066119,
        "created": "2021-07-22T06:15:14Z",
        "latitude": 42.354856,
        "title": "<strong>Software</strong> <strong>Engineer</strong>",
        "category": {
            "__CLASS__": "Adzuna::API::Response::Category",
            "tag": "it-jobs",
            "label": "IT Jobs"
        },
        "company": {
            "display_name": "Community Solar",
            "__CLASS__": "Adzuna::API::Response::Company"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2334991199?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=C326BD3483B44B9C71D8DF1F7EEC687737692BA2",
        "location": {
            "area": [
                "US",
                "Massachusetts",
                "Suffolk County",
                "Boston"
            ],
            "display_name": "Boston, Suffolk County",
            "__CLASS__": "Adzuna::API::Response::Location"
        },
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjMzNDk5MTE5OSIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.FUGmZ6A-vnU6ydDBf8sdz8aWU3apDLQplrIhxRaROIQ",
        "salary_is_predicted": "0",
        "description": "Description: BCS is a spinout from BlueWave Solar who makes it easy for people to reduce their footprint and give back to communities by making clean energy options more accessible, more affordable and more equitable for all. We're proud to deliver consumer products like community solar and innovative technology products that are currently being developed. BCS strives to create the most diverse, inclusive, just and equitable environment for our employees, customers, partners and communities and…",
        "__CLASS__": "Adzuna::API::Response::Job"
    },
    {
        "latitude": 42.519469,
        "category": {
            "label": "IT Jobs",
            "__CLASS__": "Adzuna::API::Response::Category",
            "tag": "it-jobs"
        },
        "title": "<strong>Software</strong> <strong>Engineer</strong>",
        "company": {
            "__CLASS__": "Adzuna::API::Response::Company",
            "display_name": "L3Harris Technologies"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2322478531?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=76324351DAD0B100BF648A77C90D745FEAF99795",
        "location": {
            "area": [
                "US",
                "Massachusetts",
                "Middlesex County",
                "Acton"
            ],
            "display_name": "Acton, Middlesex County",
            "__CLASS__": "Adzuna::API::Response::Location"
        },
        "id": "2322478531",
        "created": "2021-07-16T11:49:17Z",
        "longitude": -71.428982,
        "salary_is_predicted": "0",
        "description": "Description: Job Title: Systems Engineering Job Code: CS20213003-58833 Job Location: Londonderry, NH Advance your career in a fast-paced company with hands-on design opportunities that become production reality. L3Harris Integrated Vision Solutions, is looking for a Systems Engineer to join our technical staff. You will be part of a small engineering team responsible for the hands-on development and integration, systems engineering leadership and technical expertise to support the development o…",
        "__CLASS__": "Adzuna::API::Response::Job",
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiR01UUzUwVHI2eEc5Z0JYV1dvQk1nZyIsImkiOiIyMzIyNDc4NTMxIn0.pwuf7gjEsjS3DHcu1YcGIem5n0T4qFZsziRRA7ATZZA"
    },
    {
        "latitude": 42.858424,
        "title": "<strong>Software</strong> <strong>Engineer</strong>",
        "category": {
            "label": "IT Jobs",
            "__CLASS__": "Adzuna::API::Response::Category",
            "tag": "it-jobs"
        },
        "company": {
            "__CLASS__": "Adzuna::API::Response::Company",
            "display_name": "L3Harris Technologies"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2311858459?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=B31928569FC83DA2B48CDA05E1DDA89C5EBA930E",
        "location": {
            "area": [
                "US",
                "Massachusetts",
                "Essex County",
                "Amesbury"
            ],
            "display_name": "Amesbury, Essex County",
            "__CLASS__": "Adzuna::API::Response::Location"
        },
        "id": "2311858459",
        "longitude": -70.930055,
        "created": "2021-07-11T09:33:04Z",
        "salary_is_predicted": "0",
        "description": "Description: Job Title - Sr. Systems Engineer Job ID - CS20202707-48374 Job Location - Londonderry, NH Advance your career in a fast-paced company with hands-on design opportunities that become production reality. L3Harris Integrated Vision Solutions, is looking for a Systems Engineer to join our technical staff. You will be part of a small engineering team responsible for the hands-on development and integration, systems engineering leadership and technical expertise to support the development…",
        "__CLASS__": "Adzuna::API::Response::Job",
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiR01UUzUwVHI2eEc5Z0JYV1dvQk1nZyIsImkiOiIyMzExODU4NDU5In0.KhT0kOLcGqPAvFvv574A8m2V2HSu9B2whXxGEMd-2dE"
    },
    {
        "latitude": 42.380327,
        "category": {
            "__CLASS__": "Adzuna::API::Response::Category",
            "tag": "it-jobs",
            "label": "IT Jobs"
        },
        "title": "Senior <strong>Software</strong> <strong>Engineer</strong>",
        "redirect_url": "https://www.adzuna.com/land/ad/2253655723?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=20F72D99616AF26D7A9583500F19C86CFB374B6B",
        "company": {
            "__CLASS__": "Adzuna::API::Response::Company",
            "display_name": "Amadeus Capital Partners Ltd"
        },
        "location": {
            "display_name": "Cambridge, Middlesex County",
            "area": [
                "US",
                "Massachusetts",
                "Middlesex County",
                "Cambridge"
            ],
            "__CLASS__": "Adzuna::API::Response::Location"
        },
        "id": "2253655723",
        "longitude": -71.13891,
        "created": "2021-06-15T12:14:09Z",
        "salary_is_predicted": "0",
        "description": "This is a unique opportunity for you to be part of a team that develops scalable systems to tackle tough machine-learning problems. Working with a cloud-based platform that combines branches of mathematics and engineering in ways that have never been done before, you will be providing software engineering solutions to drive quality and provide confidence in the complex systems being developed. You will spend your time breaking down the work required, working on designs, implementing them, revie…",
        "__CLASS__": "Adzuna::API::Response::Job",
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjI1MzY1NTcyMyIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.NB9PPTgTNXJvpu_a5_ENx44YxI5E7s2M03r7A2WT9rk"
    },
    {
        "id": "2305939078",
        "longitude": -71.066119,
        "created": "2021-07-08T08:06:07Z",
        "latitude": 42.354856,
        "category": {
            "label": "IT Jobs",
            "__CLASS__": "Adzuna::API::Response::Category",
            "tag": "it-jobs"
        },
        "title": "<strong>Software</strong> <strong>Engineer</strong> I",
        "company": {
            "display_name": "Mass Technology Leadership Council",
            "__CLASS__": "Adzuna::API::Response::Company"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2305939078?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=245CCB711A9CB70A65DFA7A2BB13537A518E5F9A",
        "location": {
            "display_name": "Boston, Suffolk County",
            "area": [
                "US",
                "Massachusetts",
                "Suffolk County",
                "Boston"
            ],
            "__CLASS__": "Adzuna::API::Response::Location"
        },
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjMwNTkzOTA3OCIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.5bgCatSYrNqvd6wd8rz34n5iR8Pd6bIa7UqWlUPkWgU",
        "salary_is_predicted": "0",
        "description": "SECURE ADVANCEMENT FOR ALL - This is the central guiding principle for each member of the Rapid7 team: “What more can we do to help all of us live in a more secure world?” With new technologies and environments seeming to emerge every day, keeping our networks secure has become more challenging, and more critical, than ever before. As a software engineer on the Boston InsightIDR team, you'll be joining a smart, passionate team dedicated to this mission. What You'll Be Building InsightIDR is a c…",
        "__CLASS__": "Adzuna::API::Response::Job"
    },
    {
        "id": "2331955445",
        "created": "2021-07-20T23:34:42Z",
        "longitude": -70.184741,
        "title": "Manager, <strong>Software</strong> <strong>Engineering</strong>",
        "category": {
            "__CLASS__": "Adzuna::API::Response::Category",
            "tag": "it-jobs",
            "label": "IT Jobs"
        },
        "latitude": 41.666778,
        "location": {
            "__CLASS__": "Adzuna::API::Response::Location",
            "display_name": "South Yarmouth, Barnstable County",
            "area": [
                "US",
                "Massachusetts",
                "Barnstable County",
                "South Yarmouth"
            ]
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2331955445?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=012119989D02FC5EEC80898F9C70276CDBF8B12F",
        "company": {
            "__CLASS__": "Adzuna::API::Response::Company",
            "display_name": "Tyler Technologies"
        },
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiR01UUzUwVHI2eEc5Z0JYV1dvQk1nZyIsImkiOiIyMzMxOTU1NDQ1In0.pIGBHdS8ne0jprG2kS8c__wwIIAykJP-Doppu4t8Q7A",
        "description": "The Munis State Reporting Development Team is responsible for all State Reporting functionality offered within the Munis ERP product including state-specific retirement reporting, payroll and financial related integrations, year-end processing, and more. The team is comprised of Software Engineers, Quality Assurance Specialists, and Support Technicians which is unique as this is the only team in the department responsible for both Development and Support initiatives. The Software Engineering Ma…",
        "salary_is_predicted": "0",
        "__CLASS__": "Adzuna::API::Response::Job"
    },
    {
        "created": "2021-07-14T17:43:19Z",
        "longitude": -71.066119,
        "id": "2318558437",
        "redirect_url": "https://www.adzuna.com/land/ad/2318558437?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=A88710F25EC0D0CFA85D22774180FCD5B7FECB58",
        "company": {
            "display_name": "Lattice Automation",
            "__CLASS__": "Adzuna::API::Response::Company"
        },
        "location": {
            "__CLASS__": "Adzuna::API::Response::Location",
            "display_name": "Boston, Suffolk County",
            "area": [
                "US",
                "Massachusetts",
                "Suffolk County",
                "Boston"
            ]
        },
        "latitude": 42.354856,
        "category": {
            "tag": "it-jobs",
            "__CLASS__": "Adzuna::API::Response::Category",
            "label": "IT Jobs"
        },
        "title": "Junior <strong>Software</strong> <strong>Engineer</strong>",
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiR01UUzUwVHI2eEc5Z0JYV1dvQk1nZyIsImkiOiIyMzE4NTU4NDM3In0.h0yVSAJZzJ5C1NQKbgkMYEuPrsQpvXWEyVBjOyYM9k8",
        "__CLASS__": "Adzuna::API::Response::Job",
        "salary_is_predicted": "0",
        "description": "Boston , Massachusetts , United States | Full-time | Partially remote Lattice Automation, Inc. provides complete solutions to fundamentally change the way that synthetic biological designs are conceived, designed, physically created, and managed. Our technology builds upon state-of-the-art techniques and technology in computer science, electrical engineering, and bioengineering. We are building a team of software developers, computer scientists, and biologists that can collaboratively engineer …"
    },
    {
        "id": "2318555546",
        "longitude": -71.066119,
        "created": "2021-07-14T17:43:02Z",
        "category": {
            "label": "IT Jobs",
            "tag": "it-jobs",
            "__CLASS__": "Adzuna::API::Response::Category"
        },
        "title": "Lead <strong>Software</strong> <strong>Engineer</strong>",
        "latitude": 42.354856,
        "location": {
            "__CLASS__": "Adzuna::API::Response::Location",
            "display_name": "Boston, Suffolk County",
            "area": [
                "US",
                "Massachusetts",
                "Suffolk County",
                "Boston"
            ]
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2318555546?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=D9D642D56FC19530E9632846647F23D59832873F",
        "company": {
            "display_name": "Sphinix Solutions",
            "__CLASS__": "Adzuna::API::Response::Company"
        },
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjMxODU1NTU0NiIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.Lk665ed0DDdB36n57UEfuqbqcwfssUZTVtD8Evl1h4o",
        "description": "We are growing quickly and we’re looking for a Senior Lead Software Engineers. This is more than a technical position, though. WHAT YOU’LL DO AS A SR. LEAD SOFTWARE ENGINEER: Take ownership for the design, development, maintenance, testing strategy, and operations of a full-stack team, with front-end Single Page Applications written primarily in React, Node.JS , and Redux, and Xamarin written iOS and Android applications. Define development patterns and best practices for your team. Mentor and …",
        "salary_is_predicted": "0",
        "__CLASS__": "Adzuna::API::Response::Job"
    },
    {
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjMzMTk0NTE4MSIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.rpuB1saRCi85xokCu6qiQ22vy78LxGjYHvG7-J5hZJk",
        "salary_is_predicted": "0",
        "description": "Job Description - Research Software Engineer (3140455) Research Software Engineer - ( 3140455 ) GeneralSummary/Overview Statement: Will work under Dr. Guillermo Tearney to help implement,test, and deploy novel and customized medical imaging device applications.These tools will be used to analyze and visualize optical imaging andmicroscopy datasets, from both clinical and biological experiments. Core skillsor capabilities in the technologies of C/C++, VisualStudio, Qt, and versioncontrol are des…",
        "__CLASS__": "Adzuna::API::Response::Job",
        "id": "2331945181",
        "created": "2021-07-20T23:32:59Z",
        "longitude": -71.066119,
        "latitude": 42.354856,
        "category": {
            "label": "IT Jobs",
            "__CLASS__": "Adzuna::API::Response::Category",
            "tag": "it-jobs"
        },
        "title": "Research <strong>Software</strong> <strong>Engineer</strong>",
        "company": {
            "display_name": "Massachusetts General Physicians’ Organization",
            "__CLASS__": "Adzuna::API::Response::Company"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2331945181?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=F6024A83A4AFA095658A7C7E770A7B22CE7C0318",
        "location": {
            "__CLASS__": "Adzuna::API::Response::Location",
            "display_name": "Boston, Suffolk County",
            "area": [
                "US",
                "Massachusetts",
                "Suffolk County",
                "Boston"
            ]
        }
    },
    {
        "id": "2331945605",
        "created": "2021-07-20T23:33:05Z",
        "longitude": -71.13891,
        "latitude": 42.380327,
        "title": "Senior <strong>Software</strong> <strong>Engineer</strong>",
        "category": {
            "__CLASS__": "Adzuna::API::Response::Category",
            "tag": "engineering-jobs",
            "label": "Engineering Jobs"
        },
        "company": {
            "display_name": "Xilinx",
            "__CLASS__": "Adzuna::API::Response::Company"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2331945605?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=614689384B31F49793B5A60064102AC919707CDC",
        "location": {
            "__CLASS__": "Adzuna::API::Response::Location",
            "display_name": "Cambridge, Middlesex County",
            "area": [
                "US",
                "Massachusetts",
                "Middlesex County",
                "Cambridge"
            ]
        },
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiR01UUzUwVHI2eEc5Z0JYV1dvQk1nZyIsImkiOiIyMzMxOTQ1NjA1In0.9QLpbAwFJqF-15Mz3Q5dGcRImquLvSS31v6SXHHqChc",
        "salary_is_predicted": "0",
        "description": "159856 Cambridge, Great Britain & Northern Ireland, United Kingdom Jul 2, 2021 We are looking for high calibre software engineer to join our expanding Cambridge team to work on Xilinx’s ultra high-performance network acceleration OpenOnload technology. OpenOnload provides breakthrough performance improvements to applications, including high speed financial exchanges and hyperscale applications. The technology behind OpenOnload involves working with low level software, kernel and operating syste…",
        "__CLASS__": "Adzuna::API::Response::Job"
    },
    {
        "latitude": 42.354856,
        "category": {
            "label": "IT Jobs",
            "tag": "it-jobs",
            "__CLASS__": "Adzuna::API::Response::Category"
        },
        "title": "Senior <strong>Software</strong> <strong>Engineer</strong>",
        "redirect_url": "https://www.adzuna.com/land/ad/2319228654?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=45256372105DF5B8B72C1C09508BA232E293414B",
        "company": {
            "display_name": "Zenith Talent Corporation",
            "__CLASS__": "Adzuna::API::Response::Company"
        },
        "location": {
            "area": [
                "US",
                "Massachusetts",
                "Suffolk County",
                "Boston"
            ],
            "display_name": "Boston, Suffolk County",
            "__CLASS__": "Adzuna::API::Response::Location"
        },
        "id": "2319228654",
        "longitude": -71.066119,
        "created": "2021-07-15T00:00:17Z",
        "salary_is_predicted": "0",
        "description": "Zenith Talent specializes in staffing professional positions in Information Technology, Engineering, Marketing, Sales, Finance, HR and Operations. We have the knowledge and skills to supply candidates that fit perfectly in your organization. As a minority owned company, we understand the benefits of a diverse workforce, which is why we have built strong alliances with many diverse organizations, directly linking their members to opportunities within your organization. Job Description Minimum qu…",
        "__CLASS__": "Adzuna::API::Response::Job",
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjMxOTIyODY1NCIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.1aH_lFSwpzBL9PJ93T-1M2PY1MbAkjDKyrhsyMyCmlI"
    },
    {
        "latitude": 42.380327,
        "title": "Senior <strong>Software</strong> <strong>Engineer</strong>",
        "category": {
            "label": "IT Jobs",
            "__CLASS__": "Adzuna::API::Response::Category",
            "tag": "it-jobs"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2254383796?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=FB40737C7D716B42C46E5A1E17E54BE2795A40AA",
        "company": {
            "__CLASS__": "Adzuna::API::Response::Company",
            "display_name": "Microsoft Corporation"
        },
        "location": {
            "display_name": "Cambridge, Middlesex County",
            "area": [
                "US",
                "Massachusetts",
                "Middlesex County",
                "Cambridge"
            ],
            "__CLASS__": "Adzuna::API::Response::Location"
        },
        "id": "2254383796",
        "created": "2021-06-15T20:15:27Z",
        "longitude": -71.13891,
        "salary_is_predicted": "0",
        "description": "Cambridge, Cambridgeshire, United Kingdom Save save Senior Software Engineer to job cart Job number 1063316 Travel 0-25 % Employment type Full-Time Are you interested in helping deliver a product targeted at a multi-billion unit market? Thousands of businesses are undergoing a digital transformation to connect MCU based devices to the internet. 9 billion MCU based devices are shipped every year, and our team is building a turn-key, end-to-end secure platform for the internet of things. We're lo…",
        "__CLASS__": "Adzuna::API::Response::Job",
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjI1NDM4Mzc5NiIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.FhyVt96T_7o-4yipTW608ADPW8MdBy2QEIui-CvM9LA"
    },
    {
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjMxOTIzMDA2OCIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.BNN_hFMQFxkRd0RUPdqqsku7fKDBwp-JV7DESb5UKgw",
        "description": "We are eClinicalWorks. We are a privately held leader in healthcare IT, providing comprehensive, cloud-based EHR/PRM solutions to medical professionals worldwide to improve workflows and reduce the risk of physician burnout. We care. We are committed to positive change. And that’s where you come in. Do you value creativity and innovation? Great, so do we. At eClinicalWorks, we share a passion for improving healthcare through dedication, education, and teamwork. Everyone has that one thing they’…",
        "salary_is_predicted": "0",
        "__CLASS__": "Adzuna::API::Response::Job",
        "id": "2319230068",
        "created": "2021-07-15T00:00:26Z",
        "longitude": -71.616178,
        "title": "Director of <strong>Software</strong> <strong>Engineering</strong>",
        "category": {
            "label": "IT Jobs",
            "tag": "it-jobs",
            "__CLASS__": "Adzuna::API::Response::Category"
        },
        "latitude": 42.269539,
        "location": {
            "area": [
                "US",
                "Massachusetts",
                "Worcester County",
                "Westborough"
            ],
            "display_name": "Westborough, Worcester County",
            "__CLASS__": "Adzuna::API::Response::Location"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2319230068?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=FF53D7381FBA46F2A4894B92249C19277EC99BD5",
        "company": {
            "__CLASS__": "Adzuna::API::Response::Company",
            "display_name": "Eclinicalworks"
        }
    },
    {
        "location": {
            "__CLASS__": "Adzuna::API::Response::Location",
            "area": [
                "US",
                "Massachusetts",
                "Barnstable County",
                "South Yarmouth"
            ],
            "display_name": "South Yarmouth, Barnstable County"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2318543975?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=C2541E361B1D9F48431D4F69841EA60BFBCE2041",
        "company": {
            "__CLASS__": "Adzuna::API::Response::Company",
            "display_name": "Tyler Technologies"
        },
        "title": "Senior <strong>Software</strong> <strong>Engineer</strong>",
        "category": {
            "label": "IT Jobs",
            "tag": "it-jobs",
            "__CLASS__": "Adzuna::API::Response::Category"
        },
        "latitude": 41.666778,
        "longitude": -70.184741,
        "created": "2021-07-14T17:42:07Z",
        "id": "2318543975",
        "__CLASS__": "Adzuna::API::Response::Job",
        "description": "Home • Careers • Job Listings • Senior Software Engineer Senior Software Engineer Apply Online An exceptional engineer will bring their diverse experiences and skills to deliver Tyler’s vision of Connected Communities. The strongest candidate is self-motivated, thrives in a collaborative team environment, is eager to face new challenges, and be willing to champion progressive change. The senior engineer is responsible for designing, coding, reviewing, testing, and documenting sophisticated soft…",
        "salary_is_predicted": "0",
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjMxODU0Mzk3NSIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.bmeX4sd7spq_Lzn-HWeuY0EQ3C88vu0ekLJlfv_I1Qw"
    },
    {
        "__CLASS__": "Adzuna::API::Response::Job",
        "salary_is_predicted": "0",
        "description": "Career Opportunities with Energy Solutions A great place to work. Careers At Energy Solutions Share with friends or Subscribe Are you ready for new challenges and new opportunities? Join our team Current job opportunities are posted here as they become available. At Energy Solutions we focus on achieving large-scale beneficial environmental impacts. And we believe that market-based programs can be a powerful force to deliver large-scale energy, carbon, and water-use savings. For 26 years we’ve …",
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjMxODU1MzE3NiIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.7776jcTldlShpT5CXuVJo1JyU0ttGVZnvISdBX1ye0U",
        "redirect_url": "https://www.adzuna.com/land/ad/2318553176?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=0CDD528173856E1C445AF5FDBBD9DB0633CE339D",
        "company": {
            "display_name": "Energy Solutions",
            "__CLASS__": "Adzuna::API::Response::Company"
        },
        "location": {
            "__CLASS__": "Adzuna::API::Response::Location",
            "area": [
                "US",
                "Massachusetts",
                "Suffolk County",
                "Boston"
            ],
            "display_name": "Boston, Suffolk County"
        },
        "latitude": 42.354856,
        "category": {
            "label": "Engineering Jobs",
            "__CLASS__": "Adzuna::API::Response::Category",
            "tag": "engineering-jobs"
        },
        "title": "<strong>Software</strong> <strong>Engineer</strong> II",
        "created": "2021-07-14T17:42:51Z",
        "longitude": -71.066119,
        "id": "2318553176"
    },
    {
        "description": "Get in on the ground floor at one of Boston's top startups and help us solve a huge challenge for developers and product teams - understanding customer experience. LogRocket is the first system that gives these teams complete visibility into their customer's experience using their web apps - through pixel-perfect replays of user sessions and clear insight into logs, errors and network activity. We've already attracted an elite roster of customers (Reddit, Twitch, Airbnb) and we've raised over $…",
        "salary_is_predicted": "0",
        "__CLASS__": "Adzuna::API::Response::Job",
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiR01UUzUwVHI2eEc5Z0JYV1dvQk1nZyIsImkiOiIyMzE5MjI1NjE1In0.Qsd0t_osnW58FVtWhWkzA8hv8wf2THdHTc9O1jg-yXs",
        "title": "Senior <strong>Software</strong> <strong>Engineer</strong>",
        "category": {
            "tag": "it-jobs",
            "__CLASS__": "Adzuna::API::Response::Category",
            "label": "IT Jobs"
        },
        "latitude": 42.354856,
        "location": {
            "area": [
                "US",
                "Massachusetts",
                "Suffolk County",
                "Boston"
            ],
            "display_name": "Boston, Suffolk County",
            "__CLASS__": "Adzuna::API::Response::Location"
        },
        "company": {
            "__CLASS__": "Adzuna::API::Response::Company",
            "display_name": "Roman Health Pharmacy LLC"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2319225615?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=7C1D25D7C8A264B3D7D3915E200FA7C1E8F61DE8",
        "id": "2319225615",
        "created": "2021-07-14T23:59:58Z",
        "longitude": -71.066119
    },
    {
        "latitude": 42.354856,
        "title": "Sr. <strong>Software</strong> <strong>Engineer</strong>",
        "category": {
            "label": "IT Jobs",
            "tag": "it-jobs",
            "__CLASS__": "Adzuna::API::Response::Category"
        },
        "company": {
            "display_name": "Computech Corporation",
            "__CLASS__": "Adzuna::API::Response::Company"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2202973929?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=D5CDC12E4B8E2B4E3224A111A5D1173B135CF37D",
        "location": {
            "area": [
                "US",
                "Massachusetts",
                "Suffolk County",
                "Boston"
            ],
            "display_name": "Boston, Suffolk County",
            "__CLASS__": "Adzuna::API::Response::Location"
        },
        "id": "2202973929",
        "created": "2021-05-22T04:30:48Z",
        "longitude": -71.066119,
        "salary_is_predicted": "0",
        "description": "Client is a large Financial Services company. Job Description Job Type: Contract (Right to Hire) Title: Sr. Software Engineer Job Description : This multi-faceted role offers the individual the opportunity to have tremendous impact on a number of web initiatives, starting with the rollout of a new set of Intranet/Collaboration tools. The candidate would also be joining the group at a point at which they will have significant direct impact on the evolution of our new User Experience practice and…",
        "__CLASS__": "Adzuna::API::Response::Job",
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjIwMjk3MzkyOSIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.kDUdo0zWcHTY5rFi0fIXL4Zmfk1YLPxvv5PGgxHGJB0"
    },
    {
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMjIwNjUyMDM3OSIsInMiOiJHTVRTNTBUcjZ4RzlnQlhXV29CTWdnIn0.Q2t0vtjJALjBfsAI77L68YFg2cHG5MP1R7x7nQWgiE8",
        "__CLASS__": "Adzuna::API::Response::Job",
        "description": "C++ Software Engineer Full-time Company Description Job Description Our client is seeking motivated and passionate C++ Software Engineers to develop high performance transactional systems that support a leading high frequency trading platform. Must have strong coding skills and the ability to decompose a high level problem into detailed components and subsystems. Candidates must have experience developing and maintaining real-time transaction oriented applications in a Linux/UNIX environment, a…",
        "salary_is_predicted": "0",
        "longitude": -71.066119,
        "created": "2021-05-24T04:24:23Z",
        "id": "2206520379",
        "location": {
            "area": [
                "US",
                "Massachusetts",
                "Suffolk County",
                "Boston"
            ],
            "display_name": "Boston, Suffolk County",
            "__CLASS__": "Adzuna::API::Response::Location"
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2206520379?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=D25C230CA83790D1ACA802AC55E3F9C5822D43FC",
        "company": {
            "display_name": "Alphanexusgroup",
            "__CLASS__": "Adzuna::API::Response::Company"
        },
        "category": {
            "label": "IT Jobs",
            "tag": "it-jobs",
            "__CLASS__": "Adzuna::API::Response::Category"
        },
        "title": "C <strong>Software</strong> <strong>Engineer</strong>",
        "latitude": 42.354856
    },
    {
        "created": "2021-07-21T15:23:56Z",
        "longitude": -72.59294,
        "id": "2333564688",
        "company": {
            "__CLASS__": "Adzuna::API::Response::Company",
            "display_name": "Discover Financial Services, Inc."
        },
        "redirect_url": "https://www.adzuna.com/land/ad/2333564688?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=1E91C3A681DDD488DD1D099F5C4A52FDE9210D1C",
        "location": {
            "__CLASS__": "Adzuna::API::Response::Location",
            "area": [
                "US",
                "Massachusetts",
                "Hampden County",
                "Springfield"
            ],
            "display_name": "Springfield, Hampden County"
        },
        "latitude": 42.105218,
        "category": {
            "tag": "it-jobs",
            "__CLASS__": "Adzuna::API::Response::Category",
            "label": "IT Jobs"
        },
        "title": "Principal <strong>Software</strong> <strong>Engineer</strong>",
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiR01UUzUwVHI2eEc5Z0JYV1dvQk1nZyIsImkiOiIyMzMzNTY0Njg4In0.Q0IPXbIJmameMAp1ukfRDF5RmGEmOoBkdWl-eA36b3M",
        "__CLASS__": "Adzuna::API::Response::Job",
        "salary_is_predicted": "0",
        "description": "Remote Function : Information Technology Posting Date: 03/16/2021 Job ID: R5972 With Discover, you’ll have the chance to make a difference at one of the world’s leading digital banking and payments companies. From Day 1, you’ll do meaningful work you’re passionate about, with the support and resources you need for success. We value what makes each employee unique and provide a collaborative, team-based culture that gives everyone an opportunity to shine. Be the reason millions of people find a …"
    },
    {
        "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoiR01UUzUwVHI2eEc5Z0JYV1dvQk1nZyIsImkiOiIyMzM0NTIzNjk1In0.X2uZkEA-RQDDnQHsUgiATgCqWgRrA2r_Ri_RC9-k_bw",
        "__CLASS__": "Adzuna::API::Response::Job",
        "salary_is_predicted": "0",
        "description": "Not the job you're looking for? Become a member of our talent community to stay connected and be informed of any new opportunities. We are looking for a passionate senior leader who can join the leadership team that will evolve the Data Services team to the next level of enterprise software development. The Director is a leader who can effectively guide and build teams to be successful by fostering an environment of trust, innovation, collaboration, and high performance. This person must have e…",
        "longitude": -71.195621,
        "created": "2021-07-21T23:37:48Z",
        "id": "2334523695",
        "redirect_url": "https://www.adzuna.com/land/ad/2334523695?se=GMTS50Tr6xG9gBXWWoBMgg&utm_medium=api&utm_source=aed6ce79&v=ECA8A1BB7B104629ECE646BDE819C511EDC8B346",
        "company": {
            "display_name": "eTeam Inc.",
            "__CLASS__": "Adzuna::API::Response::Company"
        },
        "location": {
            "area": [
                "US",
                "Massachusetts",
                "Middlesex County",
                "Burlington"
            ],
            "display_name": "Burlington, Middlesex County",
            "__CLASS__": "Adzuna::API::Response::Location"
        },
        "latitude": 42.504716,
        "title": "Director, <strong>Software</strong> <strong>Engineering</strong>",
        "category": {
            "__CLASS__": "Adzuna::API::Response::Category",
            "tag": "it-jobs",
            "label": "IT Jobs"
        }
    }
]

console.log(result)


// link to html page
const myResults = document.getElementById('my-job-result');

result.forEach( item => {
    const divJobs = document.createElement('div')

    divJobs.innerHTML =
        `<div class="flex justify-center">
            <div class="w-1/3 h-52 flex flex-col flex justify-center">
                <h4 class="text-sm font-bold">${item.title}</h4>
                <p class="text-sm mb-2">${item.location.display_name}</p>
                <p class="text-sm mb-2">${item.description}</p>
                <p class="text-sm mb-4">${item.created}</p>
            </div>
    </div>`

    myResults.appendChild(divJobs)

});

btn.addEventListener('click', () => {
    myResults.classList.remove('hidden');
});



// event listener
form.addEventListener('submit', (event) => {
    event.preventDefault();


});


// adding alert
function validate() {
    if(city.value.trim() === '') {
        alert('Please enter City/Town');
        return false;
    } else {
        return true;
    }
}
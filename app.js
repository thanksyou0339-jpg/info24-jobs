document.addEventListener("DOMContentLoaded", function(){

    const search =
        document.getElementById("jobSearch");

    const city =
        document.getElementById("jobCity");

    const category =
        document.getElementById("jobCategory");

    const jobs =
        document.querySelectorAll(".job-card");

    const noJobs =
        document.getElementById("noJobs");


    function filterJobs(){

        if(!jobs.length){
            return;
        }

        const searchValue =
            search
            ? search.value.toLowerCase().trim()
            : "";

        const cityValue =
            city
            ? city.value
            : "";

        const categoryValue =
            category
            ? category.value
            : "";

        let visible = 0;


        jobs.forEach(function(job){

            const jobSearch =
                (
                    job.dataset.search || ""
                ).toLowerCase();

            const jobCity =
                job.dataset.city || "";

            const jobCategory =
                job.dataset.category || "";


            const searchMatch =
                !searchValue ||
                jobSearch.includes(searchValue);

            const cityMatch =
                !cityValue ||
                jobCity === cityValue;

            const categoryMatch =
                !categoryValue ||
                jobCategory === categoryValue;


            if(
                searchMatch &&
                cityMatch &&
                categoryMatch
            ){

                job.style.display = "";

                visible++;

            }else{

                job.style.display = "none";

            }

        });


        if(noJobs){

            noJobs.style.display =
                visible === 0
                ? "block"
                : "none";

        }

    }


    if(search){
        search.addEventListener(
            "input",
            filterJobs
        );
    }


    if(city){
        city.addEventListener(
            "change",
            filterJobs
        );
    }


    if(category){
        category.addEventListener(
            "change",
            filterJobs
        );
    }

});

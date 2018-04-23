/// <reference path="../js/jquery-1.7.2.min.js"; />
/// <reference path="../js/knockout-2.1.0.js"; />
/// <reference path="../js/dxtreme.core-12.2.js"; />

(function() {
    DxSample.db = {

        sampleData: new DevExpress.data.RestStore({
            url: "/data/sampleData.json"
        })

    };
})();
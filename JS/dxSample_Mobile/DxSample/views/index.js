DxSample.Index = function (params) {
    var viewModel = {
        maxlength: ko.observable(20),
        placeholder: ko.observable("Max length is set to "),
        viewRendered: function () {
            $('#textareaContainer textarea').attr('placeholder', viewModel.placeholder() + viewModel.maxlength());
            $('#textareaContainer textarea').attr('maxlength', viewModel.maxlength());
        }
    };
    return viewModel;
};
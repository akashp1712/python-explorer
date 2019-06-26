$(document).ready(function () {


    var selectorData = explorerData['en'];
    loadFirstSelectorData(); //load initialdata for first selector
    //loadSecondSelectorData();
    // initHide();

    function loadFirstSelectorData() {
        var firstSelector = $('#dropdown1').find('select');

        //  append the data options
        Object.keys(selectorData).forEach(function (key) {
            // 2.1 fetch the option data
            firstSelector.append(
                $('<option></option>').val(key).html(selectorData[key]['option_text'])
            );

        })
        $('.card').find('.card-title').hide()
        $('.card').find('.card-text').hide()

        $('#inputdata').html()
        $('#resultdata').html()

    }


    $(document).on('change', '.selectdropdown1', function () {
        $('.cardlist').not(':first').remove();
        var thisval = $(this).find(":selected").val()
        var selectorData = explorerData['en'];
        if (typeof selectorData[thisval]['result'] != 'undefined') {
            displaydata(selectorData[thisval]) //display data


        } else {
            loadSelectorData(selectorData, thisval)
            //draw second dropdown
        }


    });



    function loadSelectorData(selectorData, key) {
        var dropdownid = "dropdown" + (parseInt($('.cardlist').length) + 1);
        var selecteddropdowclass = "selectdropdown" + (parseInt($('.cardlist').length) + 1);
        var actiontext = selectorData[key]['action_text'];

        var dropdownhtml = '<div id="' + dropdownid + '" class="cardlist"><div class="form-row"><div class="col-md-12" style="text-align: justify"><label for="inputState" class="labeltext">' + actiontext + '</label></div><div class="form-group col-md-12"><select class="form-control ' + selecteddropdowclass + '" > <option selected value="">Choose...</option></select></div></div></div>'
        $('.card-body').find('form').append(dropdownhtml)
        var secondSelector = $('.card-body').find('#' + dropdownid).find('select');
        // 4 append the options for selector
        var optionData = selectorData[key]['data']
        Object.keys(optionData).forEach(function (elementkey) {
            // 4.1 fetch the option data

            secondSelector.append(
                $("<option></option>").val(elementkey).attr('selectorkey', key + '--data--' + elementkey).html(optionData[elementkey]['option_text'])
            );
        })

        $(document).off('change', '.' + selecteddropdowclass);
        $(document).on('change', '.' + selecteddropdowclass, function () {
            $('#' + dropdownid).nextAll('.cardlist').remove();
            $('.card').find('.card-title').hide()
            $('.card').find('.card-text').hide()

            var thisval = $(this).find(":selected").val()
            if (typeof selectorData[key]['data'][thisval] != 'undefined' && typeof selectorData[key]['data'][thisval]['data'] != 'undefined') {
                loadSelectorData(selectorData[key]['data'], thisval);
                return true;
            } else {

                var arraydetail = $(this).find(":selected").attr('selectorkey').split('--');
                var finaldata = selectorData;
                arraydetail.forEach(function (value) {
                    finaldata = finaldata[value]
                });

                if (typeof finaldata.name != 'undefined') {
                    $('.card').find('.card-title').show()
                    $('.card').find('.card-title').text(finaldata.name)
                }

                if (typeof finaldata.desc != 'undefined') {
                    $('.card').find('.card-text').show()
                    $('.card').find('.card-text').text(finaldata.desc)

                }

                displaydata(finaldata)

            }


        });



    }


    function displaydata(finaldata) {

        if (typeof finaldata.input != 'undefined') {
            $('#inputdata').html(finaldata.input)
        }
        else {
            $('#inputdata').html("This is input data ")
        }
        var typer = document.getElementById('inputdata');
        typewriter = setupTypewriter(typer);
        typewriter.type();


        if (typeof finaldata.result != 'undefined') {
            $('#resultdata').html(finaldata.result)
        } else {
            $('#resultdata').html('This is result ')
        }

        var typer = document.getElementById('resultdata');
        typewriter = setupTypewriter(typer);
        typewriter.type();
    }
});

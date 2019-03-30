$(document).ready(function(){
  loadFirstSelectorData();
  loadSecondSelectorData();
  initHide();

  function loadFirstSelectorData() {

    var firstSelector = document.getElementById("first-selector");
    var selectorData = explorerData['en'];

    // 1. append the default option
    var defaultOption = document.createElement("option");
    defaultOption.text = '...'
    defaultOption.value = 'default';
    firstSelector.appendChild(defaultOption);

    // 2 append the data options
    Object.keys(selectorData).forEach(function(key) {
        // 2.1 fetch the option data
        var option = document.createElement("option");
        option.text = selectorData[key]['option_text']
        option.value = key;

        // 2.2 append option to the selector
        firstSelector.appendChild(option);
    })
  }

  function loadSecondSelectorData() {

    var secondSelector = document.getElementById("second-selector");
    var selectorData = explorerData['en'];


    Object.keys(selectorData).forEach(function(key) {
        // 1 create the selector div
        var div = document.createElement("div");
        div.innerHTML = selectorData[key]['action_text']
        div.id = key;

        // 2 create the selector_id
        var selector = document.createElement("select");
        selector.id = selectorData[key]['selector_id']

        // 3 append the default selector
        var defaultOption = document.createElement("option");
        defaultOption.text = '...'
        defaultOption.value = 'default';
        selector.appendChild(defaultOption);

        // 4 append the options for selector
        var optionData = selectorData[key]['data']
        Object.keys(optionData).forEach(function(key) {
            // 4.1 fetch the option data
            var option = document.createElement("option");
            option.text = optionData[key]['option_text']
            option.value = key;
            // 4.2 append option to the selector
            selector.appendChild(option);
        })

        // 5 append selector to div, div to secondSelector div
        div.appendChild(selector);
        secondSelector.appendChild(div);
    })
  }

  function initHide() {
    hideSecondSelectorChildren();
    //hideDocumentation();
  }

  function hideDocumentation() {
    $("#documentation").hide();
  }

  $("#first-selector").change(function() {
    resetFirstSelector(this.value);
  });

  function resetFirstSelector(selectedVal) {
    hideSecondSelectorChildren();
    //hideDocumentation();
    $("#second-selector #" + selectedVal ).show();
    $("#code").html(" # Create a List<br>nums = [2, 3, 4, 5]");
    highlightCode();
  }

  function highlightCode() {
    $('pre code').each(function(i, e) {hljs.highlightBlock(e);});
  }

  function hideSecondSelectorChildren() {
    $("#second-selector").children().hide();
  }

  // Important: need to add event istener whenever new data for first selector is added.
  // when #second-selector children change
  $("#sel-add").change(function() {
    updateInfo('add', this.value);
  });

  $("#sel-rm").change(function() {
    updateInfo('rm', this.value);
  });

  $("#sel-find").change(function() {
    updateInfo('find', this.value);
  });

  $("#sel-sort").change(function() {
    updateInfo('sort', this.value);
  });

  $("#sel-other").change(function() {
    updateInfo('other', this.value);
  });

  function updateInfo(category, itemName) {
    updateCode(category, itemName);
    showDocumentation();
    highlightCode();
    updateDocumentation(category, itemName);
  }

  function updateCode(category, itemName) {
    $("#code").html(explorerData['en'][category]['data'][itemName]['text']);
  }

  function showDocumentation(){
    $("#documentation").show();
  }

  function updateDocumentation(category, itemName) {
    var selectedItem = explorerData['en'][category]['data'][itemName];
    var elem = [];
    elem[0] = "<h2 id='doc-title'>" + selectedItem['name'] + '</h2>';
    elem[1] = '<div>' + selectedItem['desc'] + '</div>';

    var text = elem.join('');

    $('#documentation').html(text);
  }
});

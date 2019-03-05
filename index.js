$(document).ready(function(){
  initHide();

  function initHide() {
    hideSecondSelectorChildren();
    hideDocumentation();
  }

  function hideDocumentation() {
    $("#documentation").hide();
  }

  $("#first-selector").change(function() {
    resetFirstSelector(this.value);
  });

  function resetFirstSelector(selectedVal) {
    hideSecondSelectorChildren();
    hideDocumentation();
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

  $("#sel-iter").change(function() {
    updateInfo('iter', this.value);
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
    $("#code").html(explorerData['en'][category][itemName]['text']);
  }

  function showDocumentation(){
    $("#documentation").show();
  }

  function updateDocumentation(category, itemName) {
    var selectedItem = explorerData['en'][category][itemName];
    var elem = [];
    elem[0] = "<h2 id='doc-title'>Array." + selectedItem['name'] + '</h2>';
    elem[1] = '<div>' + selectedItem['desc'] + '</div>';

    elem[2] = "<a href='https://ruby-doc.org/core-2.5.0/Array.html#method-i-" + selectedItem['link_name'] + "' id='doc-link' target='_blank'>see the docs →</a>";
    var text = elem.join('');

    $('#documentation').html(text);
  }
});

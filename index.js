$(document).ready(function() {
    let tabs = [];


    function createTab() {
        const tabId = tabs.length;
        tabs.push({ id: tabId, url: "" });
      
        $('.tabs').append(`<div class="tab" id="tab-${tabId}">
                              <span>${tabId + 1}</span>
                              <input type="text" class="tab-url" data-tab-id="${tabId}" placeholder="Enter URL">
                              <span class="close-btn">x</span>
                              <div class="iframe-container"><iframe class="iframe" id="iframe-${tabId}"></iframe></div>
                           </div>`);
        $(`#tab-${tabId}`).on('click', () => switchTab(tabId));
        $(`#tab-${tabId} .close-btn`).on('click', (event) => closeTab(event, tabId));
      
        // Focus on the URL input field
        $(`#tab-${tabId} .tab-url`).focus();
      
        switchTab(tabId);
      }
      


  
    
  
    function closeTab(event, tabId) {
      event.stopPropagation();
      $(`#tab-${tabId}`).remove();
      tabs = tabs.filter(tab => tab.id !== tabId);
      if (tabs.length === 0) {
        $('.iframe-container').hide();
      }
    }

    function switchTab(tabId) {
        $('.tab').removeClass('active');
        $(`#tab-${tabId}`).addClass('active');
      
        const url = tabs[tabId].url;
        $(`#iframe-${tabId}`).attr('src', url);
      }
      
  
    



  
    $('#add-tab-btn').on('click', createTab);
  
    $(document).on('keyup', '.tab-url', function(event) {
      if (event.keyCode === 13) {
        const tabId = $(this).data('tab-id');
        const url = $(this).val();
        tabs[tabId].url = url;
        switchTab(tabId);
      }
    });
  
  });






  
  
  
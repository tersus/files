var mainContainer;
$(document).ready(function () {
    mainContainer = new TWidgets.TWidget($('#mainContainer'));
    FileManager.loadFolderContents("/", mainContainer);
});

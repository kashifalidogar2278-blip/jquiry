$(document).ready(function() {

    // 1. Add Task Logic
    $('#add-btn').on('click', function() {
        var task = $('#task-input').val();

        if (task !== "") {
            var taskTemplate = `
                <li>
                    <input type="checkbox" class="toggle-complete">
                    <span>${task}</span>
                    <span class="delete">X</span>
                </li>`;
            
            $('#task-list').append(taskTemplate);
            $('#task-input').val(""); // Input clear karein
        } else {
            alert("Please enter a task!");
        }
    });

    // 2. Remove Task (Event Delegation use karni hogi kyunki li dynamically add hote hain)
    $(document).on('click', '.delete', function() {
        $(this).parent().fadeOut(300, function() {
            $(this).remove();
        });
    });

    // 3. Toggle Completion
    $(document).on('change', '.toggle-complete', function() {
        $(this).parent().toggleClass('completed');
    });

    // Extra: Enter key se bhi task add ho
    $('#task-input').on('keypress', function(e) {
        if(e.which === 13) {
            $('#add-btn').click();
        }
    });

});
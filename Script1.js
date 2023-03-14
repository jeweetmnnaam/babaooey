$(document).ready(function() {
    $.getJSON('departements.json', function(data) {
        var departments = data;

        $('#btn').on('click', function() {
            var code = $('#txtValue').val();
            if (!/^\d{2,3}$/.test(code)) {
                $('#display').text('Error: Please enter a 2-digit code');
                return;
            }
            var department = getDepartmentByCode(code, departments);
            if (department) {
                $('#display').text(department);
            } else {
                $('#display').text('Error: Invalid department code');
            }
        });
    });
});

function getDepartmentByCode(code, departments) {
    var department = null;
    $.each(departments, function(index, value) {
        if(value.code === code) {
            department = value.nom;
            return false;
        }
    });
    return department;
}

$(document).ready(function () {
    const checkbox = $("#switch");
    const screen = $("#screen");
    const equal = $("#equal")
    const buttons = $("button");
    const body = $("body")
    const wrapper = $(".container");
    const year = $("#year")
    const date = new Date().getFullYear();
    let screenValue = ''

    //Dark and Light Mode Toggle
    checkbox.change(function () {
        if ($(this).is(":checked")) {
            body.addClass("light-body");
            wrapper.addClass("light-wrapper");
            buttons.addClass("light-button");
            screen.addClass("light-screen");
            equal.addClass("light-equal")
        }
        else {
            body.css({ "-webkit-transition": "0.4s" })
            body.removeClass("light-body");
            wrapper.css({ "-webkit-transition": "0.4s" })
            wrapper.removeClass("light-wrapper");
            buttons.css({ "-webkit-transition": "0.4s" })
            buttons.removeClass("light-button");
            screen.css({ "-webkit-transition": "0.4s" })
            screen.removeClass("light-screen");
            equal.css({ "-webkit-transition": "0.4s" })
            equal.removeClass("light-equal");
        }
    })

    for (let i = 0; i <= buttons.length; i++) {
        //Click Event Listener
        $(buttons[i]).click(function () {
            if (i >= 2 && i <= 17) {
                screenValue += $(this).text();
                screen.val(screenValue);
                switch (i) {
                    case 3:
                        operator($(buttons[3]), "divide");
                        break;
                    case 7:
                        operator($(buttons[7]), "times");
                        break;
                    case 7:
                        operator($(buttons[11]), "minus");
                        break;
                }
                if (screen.val().length >= 15) {
                    screen.addClass("small-font");
                }
            }
            switch (i) {
                case 0:
                    clear();
                    break;
                case 1:
                    backSpace();
                    break;
                case 18:
                    equalResult();
            }
        });
    }
    //KeyDown Event Listener
    body.keydown(function (event) {
        const regex = /^[0-9+*/%-]+$/;
        if (regex.test(event.key)) {
            screenValue += event.key;
            screen.val(screenValue)
            if (screen.val().length >= 15) {
                screen.addClass("small-font");
            }
        }
        switch (event.key) {
            case "Backspace":
                backSpace();
                break;
            case "Escape":
                clear();
                break;
            case "Enter":
                equalResult()
                break;
        }
    });

    function operator(button, operator) {
        screen.val(screen.val().slice(0, -1));
        screenValue = screen.val()
        screenValue += button.data(operator);
        screen.val(screenValue)
    }

    function clear() {
        screenValue = "";
        screen.val(0);
        screen.css({ "-webkit-transition": "0.4s" })
        screen.removeClass("small-font");
    }

    function backSpace() {
        screen.val(screen.val().slice(0, -1));
        screenValue = screen.val()
        if (screen.val() === "") {
            screen.val(0);
        }
        if (screen.val().length <= 15) {
            screen.css({ "-webkit-transition": "0.4s" })
            screen.removeClass("small-font");
        }
    }
    function equalResult() {
        let result;
        try {
            result = eval(screen.val());
            screen.val(result)
        }
        catch (error) {
            screen.val("Error");
        }
    }
    year.text(date)
});

// if (screenValue.charAt(screenValue.length - 1) === $(buttons[3]).text()) {
                    //     $(buttons[3]).prop("disabled", true);
                    // }
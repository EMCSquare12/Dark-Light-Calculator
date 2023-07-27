$(document).ready(function () {
    const checkbox = $("#switch");
    const screen = $("#screen");
    const equal = $("#equal")
    const buttons = $("button");
    const body = $("body")
    const wrapper = $(".container");
    let screenValue = ''


    for (let i = 0; i <= buttons.length; i++) {
        //Click Event Listener
        $(buttons[i]).click(function () {
            if (i >= 2 && i <= 17) {
                screenValue += $(this).text();
                screen.val(screenValue);
                if (screen.val().length >= 15) {
                    screen.addClass("small-font");
                }
                if (i === 3) {
                    screen.val(screen.val().slice(0, -1));
                    screenValue = screen.val()
                    screenValue += $(buttons[3]).data("divide");
                    screen.val(screenValue)
                }
                else if (i === 7) {
                    screen.val(screen.val().slice(0, -1));
                    screenValue = screen.val()
                    screenValue += $(buttons[7]).data("times");
                    screen.val(screenValue)
                }
                else if (i === 11) {
                    screen.val(screen.val().slice(0, -1));
                    screenValue = screen.val()
                    screenValue += $(buttons[11]).data("minus");
                    screen.val(screenValue)
                }
            }
            else if (i === 0) {
                screenValue = "";
                screen.val(0);
                screen.css({ "-webkit-transition": "0.4s" })
                screen.removeClass("small-font");
            }
            else if (i === 1) {
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
            else if (i === 18) {
                let result;
                try {
                    result = eval(screen.val());
                    screen.val(result)
                }
                catch (error) {
                    screen.val("Error");
                }
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
        else if (event.key === "Backspace") {
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

        else if (event.key === "Escape") {
            screenValue = "";
            screen.val(0);
            screen.css({ "-webkit-transition": "0.4s" })
            screen.removeClass("small-font");
        }

        else if (event.key === "Enter") {
            let result;
            try {
                result = eval(screen.val());
                screen.val(result)
            }
            catch (error) {
                screen.val("Error");
            }
        }
    });

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

});

// if (screenValue.charAt(screenValue.length - 1) === $(buttons[3]).text()) {
                    //     $(buttons[3]).prop("disabled", true);
                    // }
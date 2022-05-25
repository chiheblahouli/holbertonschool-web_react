import React from "react";
import { render } from "react-dom";
import {getFullYear, getFooterCopy, getLatestNotification} from './utils.js'
import { act } from "react-dom/test-utils";


it("rendders the current year", () => {
    act(() => {
        getFullYear();
    });
    expect(getFullYear()).toBe(new Date().getFullYear())
});

it("rendders a paragraph in footer", () => {
    act(() => {
        getFooterCopy(true);
    });
    expect(getFooterCopy(true)).toBe('Holberton School')
});


it("rendders a paragraph in footer", () => {
    act(() => {
        getFooterCopy(false);
    });
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard')
});





it("rendders latest notifications", () => {
    act(() => {
        getLatestNotification()
    });
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD')
});


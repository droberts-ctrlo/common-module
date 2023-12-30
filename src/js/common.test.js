import { stopPropagation, hideElement, showElement } from "./common";
import 'jquery';

describe('Common javascript function tests', ()=>{
    it('stops propagation', ()=>{
        const event = {
            stopPropagation: jest.fn(),
            preventDefault: jest.fn()
        }
        stopPropagation(event);
        expect(event.stopPropagation).toHaveBeenCalled();
        expect(event.preventDefault).toHaveBeenCalled();
    });

    it('Hides an element', ()=>{
        const el = {
            hasClass: jest.fn().mockReturnValue(false),
            addClass: jest.fn(),
            attr: jest.fn(),
            css: jest.fn()
        }
        hideElement(el);
        expect(el.hasClass).toHaveBeenCalled();
        expect(el.addClass).toHaveBeenCalledWith('hidden');
        expect(el.attr).toHaveBeenCalledWith('aria-hidden', "true");
        expect(el.css).toHaveBeenCalledWith('display', 'none');
        expect(el.css).toHaveBeenCalledWith('visibility', 'hidden');
    });

    it('Does not hide an element if it is already hidden', ()=>{
        const el = {
            hasClass: jest.fn().mockReturnValue(true),
            addClass: jest.fn(),
            attr: jest.fn(),
            css: jest.fn()
        }
        hideElement(el);
        expect(el.hasClass).toHaveBeenCalled();
        expect(el.addClass).not.toHaveBeenCalled();
        expect(el.attr).not.toHaveBeenCalled();
        expect(el.css).not.toHaveBeenCalled();
        expect(el.css).not.toHaveBeenCalled();
    });

    it('Shows an element', ()=>{
        const el = {
            hasClass: jest.fn().mockReturnValue(true),
            removeClass: jest.fn(),
            attr: jest.fn(),
            css: jest.fn()
        }
        showElement(el);
        expect(el.hasClass).toHaveBeenCalled();
        expect(el.removeClass).toHaveBeenCalledWith('hidden');
        expect(el.attr).toHaveBeenCalledWith('aria-hidden', "false");
        expect(el.css).toHaveBeenCalledWith('display', '');
        expect(el.css).toHaveBeenCalledWith('visibility', '');
    });

    it('Does not show an element if it is already shown', ()=>{
        const el = {
            hasClass: jest.fn().mockReturnValue(false),
            removeClass: jest.fn(),
            attr: jest.fn(),
            css: jest.fn()
        }
        showElement(el);
        expect(el.hasClass).toHaveBeenCalled();
        expect(el.removeClass).not.toHaveBeenCalled();
        expect(el.attr).not.toHaveBeenCalled();
        expect(el.css).not.toHaveBeenCalled();
        expect(el.css).not.toHaveBeenCalled();
    });
});
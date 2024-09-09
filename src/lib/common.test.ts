import { fromJson, hideElement, showElement } from "./common";
import { describe, it, expect, jest } from '@jest/globals';
import './test.definitions';

type TestObject = { foo: string };

describe('common functions', () => {
    describe('CSS and ARIA', () => {
        it('hides an element', () => {
            const el = document.createElement('div');
            hideElement(el);
            expect(el.ariaHidden).toEqual('true');
        });

        it('does not hide a hidden element', () => {
            const el = document.createElement('div');
            el.ariaHidden = 'true';
            expect(el.ariaHidden).toEqual('true');
            hideElement(el);
            expect(el.ariaHidden).toEqual('true');
        });

        it('shows a hidden element', () => {
            const el = document.createElement('div');
            el.ariaHidden = 'true';
            showElement(el);
            expect(el.ariaHidden).toEqual(null);
        });

        it('does not show a visible element', () => {
            const el = document.createElement('div');
            expect(el.ariaHidden).toEqual(undefined);
            showElement(el);
            expect(el.ariaHidden).toEqual(undefined);
        });
    });

    describe('JSON tests', () => {
        it('parses a JSON string', () => {
            const json = '{"foo":"bar"}';
            const parsed = fromJson<TestObject>(json);
            expect((parsed as TestObject)?.foo).toEqual('bar');
        });

        it('parses a JSON object', () => {
            const json = { foo: "bar" };
            const parsed = fromJson<TestObject>(json);
            expect((parsed as TestObject)?.foo).toEqual('bar');
        });

        it('returns an empty object for invalid JSON', () => {
            const json = "foo";
            const parsed = fromJson(json);
            expect(parsed).toEqual({});
        });

        it('returns an empty object for null', () => {
            const json = null;
            const parsed = fromJson(json);
            expect(parsed).toEqual({});
        });

        it('returns an empty object for undefined', () => {
            const json = undefined;
            const parsed = fromJson(json);
            expect(parsed).toEqual({});
        });
    });
});

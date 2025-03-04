// I want to ensure that all Pizzas have alt text
import {render} from '@testing-library/react';
import {expect, test} from 'vitest';
import Pizza from '../Pizza';

test("Pizza has alt text", // what failed string
    async () => { // async because we are using render which is async
        const name = "My Favorite Pizza";
        const src = "https://picsum.photos/200"
        const screen = render(
            <Pizza name={name} description="super cool pizza" image={src} />
        );

        const img = screen.getByRole("img");
        expect(img.src).toBe(src);
        expect(img.alt).toBe(name);
    }
)
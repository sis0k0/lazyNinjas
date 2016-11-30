import { Component } from "@angular/core";

@Component({
    template: `
        <StackLayout>
            <Label text="Home" class="h1 text-center"></Label>
            <Button text="Load the lazy ninjas module" class="btn btn-primary btn-active"
                [nsRouterLink]="['/ninjas']"></Button>
        </StackLayout>
    `
})
export class HomeComponent {
}

import { Component } from "@angular/core";

@Component({
    template: `
        <StackLayout>
            <Label text="Home" class="h1 text-center"></Label>
            <Button text="Go to the Ninjas" class="btn btn-primary btn-active"
                [nsRouterLink]="['/ninjas']"></Button>
        </StackLayout>
    `
})
export class HomeComponent {
}

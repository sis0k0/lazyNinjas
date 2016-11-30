import { Component } from "@angular/core";

@Component({
    template: `
        <StackLayout>
            <Label text="Ninjas!" class="h1 text-center"></Label>
            <Button text="Go back home" class="btn btn-primary btn-active"
                [nsRouterLink]="['/']"></Button>
        </StackLayout>
    `
})
export class NinjasComponent {
}

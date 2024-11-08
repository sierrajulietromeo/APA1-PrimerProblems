```mermaid
classDiagram
    class Pet {
        <<abstract>>
        -name: string
        -hunger: number
        -type: string
        -color: string
        -get name(): string
        -set name(name: string): void
        -get hunger(): number
        -set hunger(hunger: number): void
        -get type(): string
        -set type(type: string): void
        -get colour(): string
        -set colour(colour: string): void
        -feed(): void
        -play(): void
        -makeSound(): void
    }

    class Dog {
        <<concrete>>
        -makeSound(): void
    }

    class Cat {
        <<concrete>>
        -makeSound(): void
    }

    class Bird {
        <<concrete>>
        -makeSound(): void
    }

    class PetShop {
        -pets: Pet[]
        -addPet(pet: Pet): void
        -removePet(pet: Pet): void
        -getPetByName(name: string): Pet
        -getAllPets(): Pet[]
        -feedAllPets(): void 
    }

    Pet <|-- Dog
    Pet <|-- Cat
    Pet <|-- Bird
    PetShop o-- Pet
    ```
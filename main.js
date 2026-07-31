    function formatName(firstName, lastName) {
        if (typeof firstName !== "string" || typeof lastName !== "string") {
            throw new Error("Tipo de dato invalido.");
        }
        return `${firstName} ${lastName}`;
    }

    function getGreeting(timeOfDay) {
        if (typeof timeOfDay !== "string") {
            throw new Error("Tipo de dato invalido.");
        }

        switch (timeOfDay.toLowerCase()) {
            case 'morning':
                return "Good morning";
            case 'afternoon':
                return "Good afternoon";
            case 'evening':
                return "Good evening";
            default:
                throw new Error("Valor no admitido.");
        }
    }

    function createGreeting(firstName, lastName, timeOfDay) {
        try {
            return `${getGreeting(timeOfDay)}, ${formatName(firstName, lastName)}`;
        } catch (error) {
            return error.message;
        }
    }

    console.log(createGreeting('Ava', 'Stone', 'morning'));
    console.log(createGreeting('Noah', 'Kim', 'evening'));
    console.log(createGreeting('Mina', 'Patel', 'afternoon'));
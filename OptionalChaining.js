const user = {
    profile: {
      name: 'Neymar',
      age: 25
    }
  }

  console.log(user && user.profile && user.profile.name);
  console.log(user?.profile?.name)
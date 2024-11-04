"use client";

import Header from "@/src/components/Header";
import ProjectCard from "@/src/components/ProjectCard";
import TaskCard from "@/src/components/TaskCard";
import UserCard from "@/src/components/UserCard";
import { useSearchQuery } from "@/src/state/api";
import { debounce } from "lodash";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: searchResults,
    isLoading,
    isError,
  } = useSearchQuery(searchTerm, {
    skip: searchTerm.length < 3,
  });

  const handleSearch = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
    500,
  );

  useEffect(() => {
    return handleSearch.cancel;
  }, [handleSearch.cancel]);

  const hasResults =
    searchResults &&
    (searchResults.tasks?.length > 0 ||
      searchResults.projects?.length > 0 ||
      searchResults.users?.length > 0);

  return (
    <div className="p-8">
      <Header name="Search" />
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="w-1/2 rounded border p-3 shadow"
          onChange={handleSearch}
        />
      </div>
      <div className="p-5">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error occurred while fetching search results.</p>}
        {!isLoading && !isError && (
          <div>
            {hasResults ? (
              <>
                {searchResults.tasks && searchResults.tasks.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 my-4">
                      Tasks
                    </h2>
                    {searchResults.tasks.map((task) => (
                      <TaskCard key={task.id} task={task} />
                    ))}
                  </div>
                )}

                {searchResults.projects && searchResults.projects.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 my-4">
                      Projects
                    </h2>
                    {searchResults.projects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                )}

                {searchResults.users && searchResults.users.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 my-4">
                      Users
                    </h2>
                    {searchResults.users.map((user) => (
                      <UserCard key={user.userId} user={user} />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <p className="text-lg text-gray-600 dark:text-gray-400">
                No results found
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;

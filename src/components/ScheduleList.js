// ScheduleList.js (MODIFIED - No New Component)
/** @jsxImportSource theme-ui */
import React, { useState, useEffect, lazy, Suspense } from "react";
import { Box, Card, Heading, Text, Image, Link } from "theme-ui";

const MotionDiv = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.div }))
);

const ScheduleList = ({ competitions, states }) => { // Receives states
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const findStateForCompetition = (competition) => {
    return states.find((state) => state.id === competition.state?.id);
  };

  return (
    <Suspense fallback={<div>Loading animations...</div>}>
      {isClient ? (
        <MotionDiv
          key="schedule-list"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {competitions.length > 0 ? (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "20px",
              }}
            >
              {competitions.map((comp) => {
                const competitionState = findStateForCompetition(comp); // Find the state
                return (
                <Card
                  key={comp.id}
                  as={isClient ? MotionDiv : "div"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  sx={{
                    padding: "20px",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                    borderRadius: "10px",
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                    height: "350px",
                  }}
                >
                  {comp.poster?.file?.url && (
                    <Image
                      src={comp.poster.file.url}
                      alt={`${comp.competitionName} Poster`}
                      sx={{
                        width: "300px",
                        borderRadius: "5px",
                        flexShrink: 0,
                      }}
                    />
                  )}
                  <Box sx={{ flex: 1, textAlign: "left", height: "100%" }}>
                    <Heading as="h3" sx={{ fontSize: "22px", marginBottom: "10px" }}>
                      {comp.competitionName}
                    </Heading>
                    <Text sx={{ fontSize: "16px", color: "#555", marginBottom: "8px" }}>
                      Location: {comp.location || "TBA"}
                    </Text>
                    <Text sx={{ fontSize: "16px", color: "#555", marginBottom: "8px" }}>
                      Date: {comp.date || "TBA"}
                    </Text>
                      {/* Use competitionState.website */}
                    {competitionState && competitionState.website && (
                      <Link href={competitionState.website} target="_blank" rel="noopener noreferrer">
                        <Text sx={{ fontSize: "16px", color: "primary", marginBottom: "8px" }}>
                          Find Out More
                        </Text>
                      </Link>
                    )}
                  </Box>
                </Card>
              )})}
            </Box>
          ) : (
            <Text>No competitions scheduled yet.</Text>
          )}
        </MotionDiv>
      ) : null}
    </Suspense>
  );
};

export default ScheduleList;